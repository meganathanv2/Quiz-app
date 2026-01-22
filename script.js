
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

const startButton = document.getElementById("save");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

const quizSection = document.getElementById("quiz-question");
const displayCategory = document.getElementById("display-category");
const displayNumQuestion = document.getElementById("num-question");
const questionDiv = document.getElementById("display-all-question");
const timeDisplay = document.getElementById("display-overall-time");



startButton.addEventListener("click", function () {
    selectedCategory = document.getElementById("category").value;
    currentQuestion = quizData[selectedCategory];
    currentIndex = 0;
    overallTime = timePerQuestion * currentQuestion.length;
    startOverallTimer();
    quizSection.classList.remove("hidden");
    showQuestion();


});
function showQuestion() {

    stopTimer();
    startTimer();
    quizSection.classList.remove("hidden");
    const currentQ = currentQuestion[currentIndex];
    displayCategory.textContent = selectedCategory;
    displayNumQuestion.textContent = `${currentIndex + 1} of ${currentQuestion.length}`;

    let optionsHtml = "";
    currentQ.options.forEach((option, index) => {
        optionsHtml += `<div>
            <input type="radio" name="option" id="option${index}" value="${index}">
            <label for="option${index}">${option}</label>
        </div>`;
    });
    questionDiv.innerHTML = `<h3>${currentQ.question}</h3>${optionsHtml}`;
    if (userAnswers[currentIndex] !== undefined) {
        document.getElementById(`option${userAnswers[currentIndex]}`).checked = true;
    }

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

document.getElementById("submit-quiz").addEventListener("click", () => {
    saveAnswer();
    calculateScore();
})

function calculateScore() {
    score = 0;
    currentQuestion.forEach((q, index) => {
        if (userAnswers[index] === q.correctIndex) {
            score++;
        }
    })
    alert(`your score is ${score}/${currentQuestion.length}`);
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
