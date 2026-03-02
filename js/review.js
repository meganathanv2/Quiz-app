const backToResultBtn = document.getElementById("back-to-result");

window.addEventListener("DOMContentLoaded", () => {

    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
    const currentQuestion = JSON.parse(localStorage.getItem("quizQuestions"));

    let reviewhtml = "";

    currentQuestion.forEach((q, index) => {
        const userAnsIndex = userAnswers[index];
        const isAnswered = Number.isInteger(userAnsIndex);
        const isCorrect = isAnswered && userAnsIndex === q.correctIndex;
        const icon = isCorrect ? "✅" : "❌";

        const userAnswerText = isAnswered
            ? q.options[userAnsIndex]
            : "Not answered";

        const correctAnswerText = q.options[q.correctIndex];

        reviewhtml += `
        <div>
            <h3>${icon} Q${index + 1}: ${q.question}</h3>

            <p class="${isCorrect ? "answer-correct" : "answer-wrong"}">
                Your answer: ${userAnswerText}
            </p>

            ${!isCorrect
                ? `<p class="answer-correct">
                        Correct answer: ${correctAnswerText}
                   </p>`
                : ""
            }
        </div>`;
    });

    document.getElementById("review-section").innerHTML = reviewhtml;
});

backToResultBtn.addEventListener("click", () => {
    window.location.href = "result.html";
});