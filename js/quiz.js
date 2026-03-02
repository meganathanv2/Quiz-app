

let selectedCategory = localStorage.getItem("category");
let selectedDifficulty = localStorage.getItem("difficulty");
let currentQuestion = [];
let currentIndex = 0;
let timePerQuestion = 15;
let countdown;
let overallTime = 0;
let overallTimerId;
let userAnswers = [];
let score = 0;
let arr;

const displayCategory = document.getElementById("display-category");
const displayNumQuestion = document.getElementById("num-question");
const questionDiv = document.getElementById("display-all-question");
const timeDisplay = document.getElementById("display-overall-time");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");
const submitButton = document.getElementById("submit-quiz");
const progressText = document.getElementById("progress-text");


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


function lockOptions() {
    for (let i = 0; i < 4; i++) {
        const opt = document.getElementById(`option${i}`);
        if (opt) opt.disabled = true;
    }
}


function stopTimer() {
    clearInterval(countdown);
}


function saveAnswer() {
    for (let i = 0; i < 4; i++) {
        const opt = document.getElementById(`option${i}`);
        if (opt && opt.checked) {
            userAnswers[currentIndex] = i;
            break;
        }
    }
    calculateProgress();
}


function enableNext() {
    if (currentIndex < currentQuestion.length - 1) {
        nextButton.disabled = false;
    }
}


function startTimer() {
    const element = document.getElementById("display-time-quiz");
    stopTimer();

    let t = arr[currentIndex] ?? timePerQuestion;
    element.textContent = `Time Left: ${t}`;
    element.style.color = t <= 10 ? "red" : "black";

    countdown = setInterval(() => {
        t--;
        arr[currentIndex] = t;
        const text = `Time Left: ${t}`;
        if (element.textContent !== text) {
            element.textContent = text;
            element.style.color = t <= 10 ? "red" : "black";
        }

        if (t <= 0) {
            clearInterval(countdown);
            arr[currentIndex] = 0;
            lockOptions();   
            saveAnswer();    
        }
    }, 1000);
}


function startOverallTimer() {
    if (!timeDisplay) return;
    clearInterval(overallTimerId);

    overallTimerId = setInterval(() => {
        if (overallTime < 0) {
            clearInterval(overallTimerId);
            calculateScore();
            localStorage.setItem("attemptSaved", "false");
            window.location.href = "result.html";
            return;
        }

        let minutes = Math.floor(overallTime / 60);
        let seconds = overallTime % 60;
        let formatted = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (timeDisplay.textContent !== `Overall Time Left: ${formatted}`) {
            timeDisplay.textContent = `Overall Time Left: ${formatted}`;
        }

        overallTime--;
    }, 1000);
}

function showQuestion() {
    stopTimer();
    startTimer();

    if (!questionDiv) return;
    const q = currentQuestion[currentIndex];

    displayCategory.textContent = selectedCategory;
    displayNumQuestion.textContent = `${currentIndex + 1} of ${currentQuestion.length}`;

    let html = "";
    q.options.forEach((op, i) => {
        html += `
        <div>
            <input type="radio"
                   id="option${i}"
                   value="${i}"
                   ${arr[currentIndex] === 0 ? "disabled" : ""}
                   onclick="enableNext()">
            <label for="option${i}">${op}</label>
        </div>`;
    });
    questionDiv.innerHTML = `<h3>${q.question}</h3>${html}`;

    if (userAnswers[currentIndex] !== undefined) {
        const opt = document.getElementById(`option${userAnswers[currentIndex]}`);
        if (opt) opt.checked = true;
    }
    prevButton.disabled = currentIndex === 0;

    nextButton.disabled = currentIndex === currentQuestion.length - 1 || arr[currentIndex] === 0;
}


function calculateScore() {
    score = 0;
    currentQuestion.forEach((q, i) => {
        if (userAnswers[i] === q.correctIndex) score++;
    });
    localStorage.setItem("score", score);
}

function calculateProgress() {
    if (!currentQuestion.length) {
        progressText.textContent = "0%";
        return;
    }
    const answeredCount = userAnswers.filter(ans => ans !== undefined).length;
    const progressPercent = (answeredCount / currentQuestion.length) * 100;
    progressText.textContent = `${progressPercent.toFixed(2)}%`;
}

window.addEventListener("DOMContentLoaded", () => {
    if (!quizData[selectedCategory] || !quizData[selectedCategory][selectedDifficulty]) return;

    currentQuestion = JSON.parse(JSON.stringify(quizData[selectedCategory][selectedDifficulty]));
    shuffleArray(currentQuestion);
    currentQuestion = currentQuestion.slice(0, 15);

    userAnswers = new Array(currentQuestion.length);
    arr = Array(currentQuestion.length).fill(timePerQuestion);

    currentQuestion.forEach(q => {
        const ans = q.options[q.correctIndex];
        shuffleArray(q.options);
        q.correctIndex = q.options.indexOf(ans);
    });

    localStorage.setItem("quizQuestions", JSON.stringify(currentQuestion));
    overallTime = currentQuestion.length * timePerQuestion;
    startOverallTimer();
    showQuestion();
});

nextButton.addEventListener("click", () => {
    saveAnswer();
    if (currentIndex < currentQuestion.length - 1) {
        currentIndex++;
        showQuestion();
    }
});

prevButton.addEventListener("click", () => {
    saveAnswer();
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
});

submitButton.addEventListener("click", () => {
    const confirmSubmit = confirm("Are you sure you want to submit the quiz?");
    if (!confirmSubmit) return;
    saveAnswer();
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    calculateScore();
    localStorage.setItem("attemptSaved", "false");
    window.location.href = "result.html";
});