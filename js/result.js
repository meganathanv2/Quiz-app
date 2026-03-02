const displayScore = document.getElementById("display-score");
const retryButton = document.getElementById("retry-quiz");
const reviewAnswerButton = document.getElementById("view-answer");

window.addEventListener("DOMContentLoaded", () => {

    displayScore.textContent = `${localStorage.getItem("score")}/15`;

    const isSaved = localStorage.getItem("attemptSaved");

    if (isSaved !== "true") {
        saveAttemptedLocalStorage();
        localStorage.setItem("attemptSaved", "true");
    }

    loadAttemptTable();
});

function saveAttemptedLocalStorage() {
    const attempts = JSON.parse(localStorage.getItem("attemptedDetail")) || [];
    const startTimestamp = Number(localStorage.getItem("startTimestamp"));
    const selectedCategory = localStorage.getItem("category");
    const selectedDifficulty = localStorage.getItem("difficulty");
    const score = localStorage.getItem("score");
    const endTimestamp = Date.now();

    if (!startTimestamp) return;

    const timeTakensec = Math.floor((endTimestamp - startTimestamp) / 1000);
    const minutes = Math.floor(timeTakensec / 60);
    const seconds = timeTakensec % 60;

    const attempt = {
        date: localStorage.getItem("startTime"),
        category: selectedCategory,
        difficulty: selectedDifficulty,
        score: score,
        timeTaken: `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    };

    attempts.push(attempt);
    localStorage.setItem("attemptedDetail", JSON.stringify(attempts));
}

function loadAttemptTable() {
    const attemts = JSON.parse(localStorage.getItem("attemptedDetail")) || [];
    let tableHtml = `<table>
    <tr>
    <th>Date & Time</th>
    <th>Category</th>
    <th>Difficulty</th>
    <th>Score</th>
    <th>Time Taken</th>
    </tr>`;

    attemts.forEach(attempt => {
        tableHtml += `<tr>
        <td>${attempt.date}</td>
        <td>${attempt.category}</td>
        <td>${attempt.difficulty}</td>
        <td>${attempt.score}</td>
        <td>${attempt.timeTaken}</td>
        </tr>`;
    });

    tableHtml += `</table>`;
    document.getElementById("attempted-detail-section").innerHTML = tableHtml;
}

retryButton.addEventListener("click", () => {
    localStorage.removeItem("userAnswers");
    localStorage.removeItem("score");
    localStorage.removeItem("attemptSaved");

    localStorage.setItem("startTimestamp", Date.now());
    localStorage.setItem(
        "startTime",
        new Date().toString().split("GMT")[0].trim()
    );

    window.location.href = "quiz.html";
});

reviewAnswerButton.addEventListener("click", () => {
    window.location.href = "review.html";
});