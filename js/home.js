let scoreDbms = document.getElementById("score-dbms");
let scoreOs = document.getElementById("score-os");
let scoreJava = document.getElementById("score-java");

function startQuiz() {
    const selectedCategory = document.getElementById("category").value;
    const selectedDifficulty = document.getElementById("difficulty").value;

    localStorage.setItem("category", selectedCategory);
    localStorage.setItem("difficulty", selectedDifficulty);

    localStorage.setItem("startTimestamp", Date.now());
    localStorage.setItem(
        "startTime",
        new Date().toString().split("GMT")[0].trim()
    );

    localStorage.removeItem("score");
    localStorage.setItem("userAnswers", JSON.stringify([]));

    window.location.href = "quiz.html";
}

function maxScoreCategory() {
    const attempts = JSON.parse(localStorage.getItem("attemptedDetail")) || [];
    const categoryScores = {};

    attempts.forEach(attempt => {
        const category = attempt.category;
        const score = Number(attempt.score);

        if (!categoryScores[category] || score > categoryScores[category]) {
            categoryScores[category] = score;
        }
    });

    scoreDbms.textContent = `DBMS: ${categoryScores["DBMS"] || 0}/15`;
    scoreOs.textContent = `OS: ${categoryScores["OS"] || 0}/15`;
    scoreJava.textContent = `Java: ${categoryScores["Java"] || 0}/15`;
}

window.addEventListener("DOMContentLoaded", () => {
    maxScoreCategory();
});