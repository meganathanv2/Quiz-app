const quizData = {
    DBMS: [
        { question: "What does DBMS stand for?", options: ["Database Management System", "Data Management Software", "Digital Management System", "Data Backup System"], correctIndex: 0 },
        { question: "Which language is used to manage databases?", options: ["HTML", "CSS", "SQL", "Java"], correctIndex: 2 },
        { question: "Which is a relational database?", options: ["MySQL", "MongoDB", "Redis", "Cassandra"], correctIndex: 0 },
        { question: "What is a primary key?", options: ["Duplicate key", "Unique identifier", "Foreign key", "Composite key"], correctIndex: 1 },
        { question: "Which command is used to fetch data?", options: ["INSERT", "DELETE", "SELECT", "UPDATE"], correctIndex: 2 },
        { question: "Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correctIndex: 1 },
        { question: "Which is not a DBMS?", options: ["Oracle", "MySQL", "Windows", "PostgreSQL"], correctIndex: 2 },
        { question: "What is a foreign key?", options: ["Primary key", "Reference key", "Unique key", "Candidate key"], correctIndex: 1 },
        { question: "Which operation deletes data?", options: ["DROP", "DELETE", "SELECT", "INSERT"], correctIndex: 1 },
        { question: "Which is used to define structure of database?", options: ["DDL", "DML", "DCL", "TCL"], correctIndex: 0 },
        { question: "What does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Control, Integrity, Data", "Access, Create, Insert, Delete", "None"], correctIndex: 0 },
        { question: "Which join returns matching records?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correctIndex: 0 },
        { question: "Which clause is used to filter rows?", options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"], correctIndex: 0 },
        { question: "Which key can have NULL values?", options: ["Primary key", "Foreign key", "Candidate key", "Super key"], correctIndex: 1 },
        { question: "Which DBMS is open-source?", options: ["Oracle", "MySQL", "SQL Server", "DB2"], correctIndex: 1 }
    ],
    OS: [
        { question: "What is an Operating System?", options: ["Application software", "System software", "Utility software", "Hardware"], correctIndex: 1 },
        { question: "Which OS is open source?", options: ["Windows", "Linux", "MacOS", "DOS"], correctIndex: 1 },
        { question: "Which manages CPU scheduling?", options: ["Compiler", "OS", "Assembler", "Interpreter"], correctIndex: 1 },
        { question: "What is a process?", options: ["Program in execution", "Program file", "Hardware unit", "Thread"], correctIndex: 0 },
        { question: "Which scheduling algorithm uses time slice?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correctIndex: 2 },
        { question: "What is deadlock?", options: ["CPU idle", "Memory full", "Processes waiting forever", "Process crash"], correctIndex: 2 },
        { question: "Which memory is fastest?", options: ["RAM", "Cache", "Hard Disk", "ROM"], correctIndex: 1 },
        { question: "Which OS supports multitasking?", options: ["DOS", "Linux", "BIOS", "Firmware"], correctIndex: 1 },
        { question: "What is virtual memory?", options: ["Cache memory", "Secondary memory", "Memory illusion", "RAM extension"], correctIndex: 3 },
        { question: "Which manages files?", options: ["File system", "Compiler", "Loader", "Shell"], correctIndex: 0 },
        { question: "Which is not an OS?", options: ["Windows", "Linux", "Oracle", "Unix"], correctIndex: 2 },
        { question: "Which OS is used in mobiles?", options: ["Android", "Unix", "DOS", "Ubuntu"], correctIndex: 0 },
        { question: "What is kernel?", options: ["User interface", "Core of OS", "Application", "Shell"], correctIndex: 1 },
        { question: "Which handles I/O devices?", options: ["Drivers", "Compiler", "CPU", "Memory"], correctIndex: 0 },
        { question: "Which is real-time OS?", options: ["Windows", "RTOS", "Linux", "MacOS"], correctIndex: 1 }
    ],
    Java: [
        { question: "Java is a ___ language.", options: ["Low-level", "High-level", "Machine-level", "Assembly-level"], correctIndex: 1 },
        { question: "Which company developed Java?", options: ["Microsoft", "Sun Microsystems", "Google", "IBM"], correctIndex: 1 },
        { question: "Which keyword is used to create object?", options: ["class", "new", "this", "static"], correctIndex: 1 },
        { question: "Which method is entry point of Java?", options: ["start()", "run()", "main()", "init()"], correctIndex: 2 },
        { question: "Java supports which concept?", options: ["OOP", "POP", "Both", "None"], correctIndex: 0 },
        { question: "Which is not a Java feature?", options: ["Secure", "Portable", "Use of pointers", "Robust"], correctIndex: 2 },
        { question: "Which keyword is used to inherit class?", options: ["extends", "implements", "inherits", "super"], correctIndex: 0 },
        { question: "Which package is default?", options: ["java.lang", "java.util", "java.io", "java.net"], correctIndex: 0 },
        { question: "Which datatype stores true/false?", options: ["int", "boolean", "char", "float"], correctIndex: 1 },
        { question: "Which loop checks condition first?", options: ["for", "while", "do-while", "foreach"], correctIndex: 1 },
        { question: "Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFound"], correctIndex: 2 },
        { question: "Which keyword stops inheritance?", options: ["static", "final", "private", "protected"], correctIndex: 1 },
        { question: "Which is used for multiple inheritance?", options: ["Class", "Interface", "Object", "Package"], correctIndex: 1 },
        { question: "Which collection allows duplicates?", options: ["Set", "Map", "List", "TreeSet"], correctIndex: 2 },
        { question: "Which operator compares values?", options: ["=", "==", "===", "!="], correctIndex: 1 }
    ]
};

let selectedCategory = "";
let currentQuestion = [];
let currentIndex = 0;
let timePerQuestion = 20;
let countdown;
let overallTime = 0;
let overallTimerId;
let userAnswers = [];
let score = 0;
let arr;

const startButton = document.getElementById("save");
const submitButton = document.getElementById("submit-quiz");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");
const displayCategory = document.getElementById("display-category");
const displayNumQuestion = document.getElementById("num-question");
const questionDiv = document.getElementById("display-all-question");
const timeDisplay = document.getElementById("display-overall-time");
const retryButton = document.getElementById("retry-quiz");
const displayScore = document.getElementById("display-score");
const displayOverallTime = document.getElementById("time-taken");
const reviewAnswerButton = document.getElementById("view-answer");
const displayReviewQuestion = document.getElementById("review-section");
const attemptedDetailButton = document.getElementById("attempted-detail");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

if (startButton) {
    startButton.addEventListener("click", () => {
        selectedCategory = document.getElementById("category").value;
        localStorage.setItem("category", selectedCategory);
        localStorage.setItem("startTime", new Date().toString().split("GMT")[0].trim());


        localStorage.setItem("userAnswers", JSON.stringify([]));
        window.location.href = "quiz.html";
    });
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
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
        html += `<div>
                    <input type="radio" name="option" id="option${i}" value="${i}" onclick="enableNext()">
                    <label for="option${i}">${op}</label>
                 </div>`;
    });
    questionDiv.innerHTML = `<h3>${q.question}</h3>${html}`;

    if (userAnswers[currentIndex] !== undefined) {
        document.getElementById(`option${userAnswers[currentIndex]}`).checked = true;
    }

    if (prevButton) prevButton.disabled = currentIndex === 0;
    if (nextButton) nextButton.disabled = currentIndex === currentQuestion.length - 1;


}



function enableNext() {
    if (nextButton && currentIndex < currentQuestion.length - 1) {
        nextButton.disabled = false;
    }
}


if (nextButton) {
    nextButton.addEventListener("click", () => {
        saveAnswer();
        if (currentIndex < currentQuestion.length - 1) {
            currentIndex++;
            showQuestion();
        }
    });
}

if (prevButton) {
    prevButton.addEventListener("click", () => {
        saveAnswer();
        if (currentIndex > 0) {
            currentIndex--;
            showQuestion();
        }
    });
}

function startTimer() {
    const element = document.getElementById("display-time-quiz");
    if (!element) return;

    clearInterval(countdown);

    let t = arr[currentIndex] ?? timePerQuestion;
    element.textContent = `Time Left : ${t}`;

    countdown = setInterval(() => {
        t--;
        arr[currentIndex] = t;
        element.textContent = `Time Left : ${t}`;

        if (t <= 0) {
            clearInterval(countdown);
            saveAnswer();

            if (currentIndex < currentQuestion.length - 1) {
                currentIndex++;
                showQuestion();
            } else {
                localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
                calculateScore();
                window.location.href = "result.html";
            }

        }
    }, 1000);
}


function stopTimer() {
    clearInterval(countdown);
}

function saveAnswer() {
    const sel = document.querySelector('input[name="option"]:checked');
    if (!sel) return;

    const previousAnswer = userAnswers[currentIndex];
    const newAnswer = Number(sel.value);

    userAnswers[currentIndex] = newAnswer;

    if (previousAnswer === undefined) {
        calculateProgress();
    }
}



if (submitButton) {
    submitButton.addEventListener("click", () => {
        saveAnswer();
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
        calculateScore();
        window.location.href = "result.html";
    });
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



document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("quiz-question")) {

        selectedCategory = localStorage.getItem("category");

        currentQuestion = JSON.parse(JSON.stringify(quizData[selectedCategory]));
        localStorage.setItem("userAnswers", JSON.stringify([]));

        shuffleArray(currentQuestion);

        userAnswers = new Array(currentQuestion.length);
        calculateProgress();

        arr = Array(currentQuestion.length).fill(timePerQuestion);

        currentQuestion.forEach(q => {
            const ans = q.options[q.correctIndex];
            shuffleArray(q.options);
            q.correctIndex = q.options.indexOf(ans);
        });

        overallTime = currentQuestion.length * timePerQuestion;
        startOverallTimer();
        showQuestion();
    }


    if (document.getElementById("result-quiz")) {
        displayScore.textContent = `${localStorage.getItem("score")}/15`;
        displayOverallTime.textContent = "";
        saveAttemptedLocalStorage();
    }


    if (document.getElementById("answer-review")) {
        selectedCategory = localStorage.getItem("category");
        userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
        currentQuestion = JSON.parse(JSON.stringify(quizData[selectedCategory]));
        let reviewhtml = "";
        currentQuestion.forEach((q, index) => {
            reviewhtml += `<div>
        <h3>Q${index + 1}:${q.question}</h3>
        <p>your answer :${userAnswers[index] !== undefined ? q.options[userAnswers[index]] : "Not answered"}</p>
        <p>correct answer :${q.options[q.correctIndex]}</p>
        </div>`;
        });

        document.getElementById("review-section").innerHTML = reviewhtml;
    }

    if (document.getElementById("attempt-container")) {
        const attemts = JSON.parse(localStorage.getItem("attemptedDetail")) || [];
        let tableHtml = `<table>
    <tr>
    <th>Date & Time</th>
    <th>Category</th>
    <th>Score</th>
    <th>Time Taken</th>
    </tr>`;
        attemts.forEach(attempt => {
            tableHtml += `<tr>
        <td>${attempt.date}</td>
        <td>${attempt.category}</td>
        <td>${attempt.score}</td>
        <td>${attempt.timeTaken}</td>
        </tr>`;
        }
        );
        tableHtml += `</table>`;
        document.getElementById("attempted-detail-section").innerHTML = tableHtml;

    }
})
function saveAttemptedLocalStorage() {
    const attempts = JSON.parse(localStorage.getItem("attemptedDetail")) || [];
    const startTimestamp = Number(localStorage.getItem("startTimestamp"));
    const selectedCategory = localStorage.getItem("category");
    const score = localStorage.getItem("score");
    const endTimestamp = Date.now();
    if (!startTimestamp) return;
    const timeTakensec = Math.floor((endTimestamp - startTimestamp) / 1000);
    console.log(timeTakensec);
    const minutes = Math.floor(timeTakensec / 60);
    console.log(minutes);
    const seconds = timeTakensec % 60;
    const attempt = {
        date: localStorage.getItem("startTime"),
        category: selectedCategory,
        score: score,
        timeTaken: `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    };
    attempts.push(attempt);
    localStorage.setItem("attemptedDetail", JSON.stringify(attempts));

}


function startOverallTimer() {
    if (!timeDisplay) return;
    clearInterval(overallTimerId);
    overallTimerId = setInterval(() => {
        let m = Math.floor(overallTime / 60);
        let s = overallTime % 60;
        timeDisplay.textContent = `Overall Time Left :${m}:${s < 10 ? "0" : ""}${s}`;
        overallTime--;
        if (overallTime < 0) {
            clearInterval(overallTimerId);
            saveAnswer();
            calculateScore();
            window.location.href = "result.html";
        }
    }, 1000);
}

if (retryButton) {
    retryButton.addEventListener("click", () => {
        localStorage.removeItem("userAnswers");
        localStorage.removeItem("score");
        window.location.href = "quiz.html";
    });
}

if (reviewAnswerButton) {
    reviewAnswerButton.addEventListener("click", () => {
        window.location.href = "review.html";
    });
}


