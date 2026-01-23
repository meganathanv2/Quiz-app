
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

let startDateTime;



const startButton = document.getElementById("save");
const submitButton = document.getElementById("submit-quiz");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

const quizSection = document.getElementById("quiz-question");
const displayCategory = document.getElementById("display-category");
const displayNumQuestion = document.getElementById("num-question");
const questionDiv = document.getElementById("display-all-question");
const timeDisplay = document.getElementById("display-overall-time");

const retryButton = document.getElementById("retry-quiz");
const displayScore = document.getElementById("display-score");
const displayOverallTime = document.getElementById("time-taken");
const reviewAnswerButton = document.getElementById("view-answer");
const attemptedDetailButton = document.getElementById("attempted-detail");

function hideAll() {
    quizSection.classList.add("hidden");

    document.getElementById("result-quiz").classList.add("hidden");
    document.getElementById("answer-review").classList.add("hidden");
    document.getElementById("attempt-container").classList.add("hidden");
}


startButton.addEventListener("click", () => {
    selectedCategory = document.getElementById("category").value;
    startDateTime = new Date();
    localStorage.setItem("startTime", startDateTime.toString().split("GMT")[0].trim());
    localStorage.setItem("category", selectedCategory);
    currentQuestion = JSON.parse(JSON.stringify(quizData[selectedCategory]));
    shuffleArray(currentQuestion);
    currentQuestion.forEach(q => {
        const correctAns = q.options[q.correctIndex];
        shuffleArray(q.options);
        q.correctIndex = q.options.indexOf(correctAns);
    })
    currentIndex = 0;
    overallTime = timePerQuestion * currentQuestion.length;
    startOverallTimer();
    quizSection.classList.remove("hidden");
    showQuestion();


});
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {

    stopTimer();
    startTimer();
    nextButton.disabled = true;
    quizSection.classList.remove("hidden");
    const currentQ = currentQuestion[currentIndex];
    displayCategory.textContent = selectedCategory;
    displayNumQuestion.textContent = `${currentIndex + 1} of ${currentQuestion.length}`;
    calculateProgress();

    let optionsHtml = "";
    currentQ.options.forEach((option, index) => {
        optionsHtml += `<div>
            <input type="radio" name="option" id="option${index}" value="${index}"onclick="enableNext()">
            <label for="option${index}">${option}</label>
        </div>`;
    });
    questionDiv.innerHTML = `<h3>${currentQ.question}</h3>${optionsHtml}`;
    if (userAnswers[currentIndex] !== undefined) {
        document.getElementById(`option${userAnswers[currentIndex]}`).checked = true;
        nextButton.disabled = false;
    }

}
function enableNext() {
    nextButton.disabled = false;
}
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

function startTimer() {
    let timeLeft = timePerQuestion;
    document.getElementById("display-time-quiz").textContent = `Time Left :${timeLeft}`;
    countdown = setInterval(() => {
        timeLeft--;
        document.getElementById("display-time-quiz").textContent = `Time Left :${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            saveAnswer();
            if (currentIndex < currentQuestion.length - 1) {
                currentIndex++;
                showQuestion();

            }
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(countdown);
}
function saveAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        userAnswers[currentIndex] = Number(selected.value);

    }

}

submitButton.addEventListener("click", () => {
    saveAnswer();
    calculateScore();
    displayResult();

})

function calculateScore() {
    score = 0;
    currentQuestion.forEach((q, index) => {
        if (userAnswers[index] === q.correctIndex) {
            score++;
        }
    })
    stopTimer();
    clearInterval(overallTimerId);



}

function startOverallTimer() {
    clearInterval(overallTimerId);
    overallTimerId = setInterval(() => {
        let minutes = Math.floor(overallTime / 60);
        let second = overallTime % 60;
        timeDisplay.textContent = `overall Time Left :${minutes}:${second < 10 ? "0" : ""}${second}`
        overallTime--;
        if (overallTime < 0) {
            clearInterval(overallTimerId);
            saveAnswer();
            calculateScore();

        }

    }, 1000);
}

function calculateProgress() {
    const processPercent = ((currentIndex + 1) / currentQuestion.length) * 100;
    document.getElementById("display-progress").textContent = `${processPercent.toFixed(2)}%`;
}

function displayResult() {
    displayScore.textContent = `${score}/${currentQuestion.length}`;
    localStorage.setItem("score", score);
    displayOverallTime.textContent = `Time Taken :${Math.floor((timePerQuestion * currentQuestion.length - overallTime) / 60)}:${(timePerQuestion * currentQuestion.length - overallTime) % 60 < 10 ? "0" : ""}${(timePerQuestion * currentQuestion.length - overallTime) % 60}`;
    saveAttemptedLocalStorage();
    renderAttemptTable();

}

function saveAttemptedLocalStorage() {
    const attemts = JSON.parse(localStorage.getItem("attemptedDetail")) || [];
    const timeTakensec = timePerQuestion * currentQuestion.length - overallTime;
    const minutes = Math.floor(timeTakensec / 60);
    const seconds = timeTakensec % 60;
    const attempt = {
        date: localStorage.getItem("startTime"),
        category: selectedCategory,
        score: score,
        timeTaken: `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    };
    attemts.push(attempt);
    localStorage.setItem("attemptedDetail", JSON.stringify(attemts));
}

function renderAttemptTable() {
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


reviewAnswerButton.addEventListener("click", () => {
    let reviewhtml = "";
    currentQuestion.forEach((q, index) => {
        reviewhtml += `<div>
        <h3>Q${index + 1}:${q.question}</h3>
        <p>your answer :${userAnswers[index] !== undefined ? q.options[userAnswers[index]] : "Not answered"}</p>
        <p>correct answer :${q.options[q.correctIndex]}</p>
        </div>`;
    });

    document.getElementById("review-section").innerHTML = reviewhtml;
    generateAttemptedDetail();
})


retryButton.addEventListener("click", () => {
    location.reload();

})

// function BestScore() {
//     const attemts = JSON.parse(localStorage.getItem("attemptedDetail")) || [];
//     const bestScoreContainer = document.getElementById("score-list");
//     bestScoreContainer.innerHTML = "";
//     if (attemts.length === 0) {
//         bestScoreContainer.innerHTML = "<p>No attempt was happened";
//     }
// }


