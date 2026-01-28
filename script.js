const quizData = {
    Java: {
        Easy: [
            { question: "Java is a ____ language.", options: ["Low-level", "High-level", "Assembly", "Machine"], correctIndex: 1 },
            { question: "Who developed Java?", options: ["Microsoft", "Sun Microsystems", "Apple", "Google"], correctIndex: 1 },
            { question: "Java file extension is?", options: [".js", ".java", ".class", ".jav"], correctIndex: 1 },
            { question: "Which method is the entry point of Java program?", options: ["start()", "main()", "run()", "init()"], correctIndex: 1 },
            { question: "Java is platform independent because of?", options: ["Compiler", "Interpreter", "JVM", "JDK"], correctIndex: 2 },
            { question: "Which keyword is used to create object?", options: ["class", "new", "this", "object"], correctIndex: 1 },
            { question: "Which symbol ends a Java statement?", options: [":", ".", ";", ","], correctIndex: 2 },
            { question: "Which data type stores true/false?", options: ["int", "boolean", "char", "float"], correctIndex: 1 },
            { question: "Which is not a Java keyword?", options: ["static", "void", "public", "include"], correctIndex: 3 },
            { question: "Java supports OOP?", options: ["Yes", "No", "Sometimes", "Depends"], correctIndex: 0 },
            { question: "Which loop executes at least once?", options: ["for", "while", "do-while", "foreach"], correctIndex: 2 },
            { question: "Which keyword inherits a class?", options: ["extends", "implements", "inherits", "super"], correctIndex: 0 },
            { question: "Which is used to print output?", options: ["print()", "System.out.print()", "echo()", "cout"], correctIndex: 1 },
            { question: "Which access modifier is most restrictive?", options: ["public", "protected", "default", "private"], correctIndex: 3 },
            { question: "Java is ___ typed language.", options: ["Weak", "Strong", "No", "Dynamic"], correctIndex: 1 }
        ],

        Medium: [
            { question: "Which concept allows method overloading?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], correctIndex: 1 },
            { question: "Which collection does not allow duplicates?", options: ["List", "ArrayList", "Set", "Vector"], correctIndex: 2 },
            { question: "Which keyword is used to prevent inheritance?", options: ["final", "static", "private", "protected"], correctIndex: 0 },
            { question: "Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correctIndex: 2 },
            { question: "Which interface is used for sorting?", options: ["Cloneable", "Serializable", "Comparable", "Runnable"], correctIndex: 2 },
            { question: "JVM stands for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Model", "None"], correctIndex: 0 },
            { question: "Which keyword refers to current object?", options: ["super", "this", "self", "object"], correctIndex: 1 },
            { question: "Which package contains Scanner class?", options: ["java.io", "java.util", "java.lang", "java.net"], correctIndex: 1 },
            { question: "Which is mutable?", options: ["String", "Integer", "StringBuilder", "Boolean"], correctIndex: 2 },
            { question: "Which thread method starts execution?", options: ["run()", "start()", "execute()", "init()"], correctIndex: 1 },
            { question: "Which keyword handles exceptions?", options: ["throw", "throws", "try-catch", "final"], correctIndex: 2 },
            { question: "Which class is parent of all classes?", options: ["Main", "System", "Object", "Class"], correctIndex: 2 },
            { question: "Which access modifier allows same package only?", options: ["public", "private", "protected", "default"], correctIndex: 3 },
            { question: "Which stream is used to read data?", options: ["InputStream", "OutputStream", "PrintStream", "DataStream"], correctIndex: 0 },
            { question: "Which keyword is used to implement interface?", options: ["extends", "implements", "inherits", "interface"], correctIndex: 1 }
        ],

        Hard: [
            { question: "Which memory area stores objects?", options: ["Stack", "Heap", "Method Area", "PC Register"], correctIndex: 1 },
            { question: "Which collection is thread-safe?", options: ["ArrayList", "HashMap", "Vector", "HashSet"], correctIndex: 2 },
            { question: "Which design pattern is Singleton?", options: ["Creational", "Structural", "Behavioral", "None"], correctIndex: 0 },
            { question: "Which keyword is used for multi-level inheritance?", options: ["extends", "implements", "super", "this"], correctIndex: 0 },
            { question: "Which Java feature supports runtime polymorphism?", options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"], correctIndex: 1 },
            { question: "Which garbage collector runs automatically?", options: ["JVM", "JDK", "JRE", "None"], correctIndex: 0 },
            { question: "Which exception occurs when dividing by zero?", options: ["NullPointerException", "ArithmeticException", "IOException", "ClassNotFoundException"], correctIndex: 1 },
            { question: "Which keyword ensures visibility between threads?", options: ["final", "static", "volatile", "synchronized"], correctIndex: 2 },
            { question: "Which class loader loads core Java classes?", options: ["System", "Extension", "Bootstrap", "Application"], correctIndex: 2 },
            { question: "Which interface supports lambda?", options: ["Marker", "Serializable", "Functional", "Cloneable"], correctIndex: 2 },
            { question: "Which method stops thread execution?", options: ["sleep()", "wait()", "stop()", "destroy()"], correctIndex: 2 },
            { question: "Which Java version introduced streams?", options: ["Java 6", "Java 7", "Java 8", "Java 11"], correctIndex: 2 },
            { question: "Which keyword locks method for thread safety?", options: ["final", "lock", "synchronized", "volatile"], correctIndex: 2 },
            { question: "Which collection allows key-value pairs?", options: ["List", "Set", "Map", "Queue"], correctIndex: 2 },
            { question: "Which JVM component executes bytecode?", options: ["Class Loader", "JIT", "Interpreter", "Garbage Collector"], correctIndex: 2 }
        ]
    },
    DBMS: {
        Easy: [
            { question: "DBMS stands for?", options: ["Data Backup System", "Database Management System", "Data Base Machine", "Digital Base System"], correctIndex: 1 },
            { question: "Which is a database?", options: ["MS Word", "MySQL", "Chrome", "Photoshop"], correctIndex: 1 },
            { question: "Which language is used in DBMS?", options: ["HTML", "CSS", "SQL", "JS"], correctIndex: 2 },
            { question: "Which stores data in tables?", options: ["File System", "DBMS", "OS", "Compiler"], correctIndex: 1 },
            { question: "Primary key can be?", options: ["Duplicate", "Null", "Unique", "Multiple"], correctIndex: 2 },
            { question: "Which command retrieves data?", options: ["INSERT", "DELETE", "SELECT", "UPDATE"], correctIndex: 2 },
            { question: "Which is not a DBMS?", options: ["Oracle", "MySQL", "MongoDB", "Windows"], correctIndex: 3 },
            { question: "Rows in table are called?", options: ["Columns", "Records", "Fields", "Cells"], correctIndex: 1 },
            { question: "Columns are called?", options: ["Fields", "Records", "Rows", "Keys"], correctIndex: 0 },
            { question: "Which key uniquely identifies record?", options: ["Foreign", "Candidate", "Primary", "Alternate"], correctIndex: 2 },
            { question: "Which DB is relational?", options: ["MongoDB", "Redis", "MySQL", "Cassandra"], correctIndex: 2 },
            { question: "SQL is?", options: ["Programming", "Query", "Markup", "Scripting"], correctIndex: 1 },
            { question: "Which command deletes table data?", options: ["DROP", "TRUNCATE", "SELECT", "CREATE"], correctIndex: 1 },
            { question: "Which constraint avoids duplicates?", options: ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"], correctIndex: 1 },
            { question: "Which key references another table?", options: ["Primary", "Foreign", "Composite", "Candidate"], correctIndex: 1 }
        ],

        Medium: [
            { question: "Normalization reduces?", options: ["Redundancy", "Security", "Speed", "Size"], correctIndex: 0 },
            { question: "1NF removes?", options: ["Duplicates", "Partial dependency", "Transitive dependency", "Nulls"], correctIndex: 0 },
            { question: "Which join returns common rows?", options: ["Left", "Right", "Inner", "Outer"], correctIndex: 2 },
            { question: "Which clause filters rows?", options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"], correctIndex: 0 },
            { question: "HAVING is used with?", options: ["SELECT", "GROUP BY", "WHERE", "JOIN"], correctIndex: 1 },
            { question: "Index improves?", options: ["Storage", "Security", "Performance", "Integrity"], correctIndex: 2 },
            { question: "Which is DDL?", options: ["SELECT", "INSERT", "CREATE", "UPDATE"], correctIndex: 2 },
            { question: "Which is DML?", options: ["DROP", "ALTER", "INSERT", "TRUNCATE"], correctIndex: 2 },
            { question: "Which key can be null?", options: ["Primary", "Candidate", "Foreign", "Composite"], correctIndex: 2 },
            { question: "Which join returns all rows?", options: ["Inner", "Left", "Cross", "Natural"], correctIndex: 1 },
            { question: "ER model uses?", options: ["Tables", "Entities", "Files", "Records"], correctIndex: 1 },
            { question: "Which is aggregate function?", options: ["COUNT", "WHERE", "FROM", "JOIN"], correctIndex: 0 },
            { question: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correctIndex: 2 },
            { question: "Candidate key is?", options: ["Unique", "Duplicate", "Null", "Foreign"], correctIndex: 0 },
            { question: "Which command removes table?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correctIndex: 1 }
        ],

        Hard: [
            { question: "BCNF is stronger than?", options: ["1NF", "2NF", "3NF", "4NF"], correctIndex: 2 },
            { question: "Which isolation level avoids dirty read?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correctIndex: 1 },
            { question: "Which schedule avoids deadlock?", options: ["Serializable", "Recoverable", "Strict", "Cascadeless"], correctIndex: 3 },
            { question: "Which key is minimal super key?", options: ["Primary", "Foreign", "Candidate", "Composite"], correctIndex: 2 },
            { question: "Which join has no condition?", options: ["Inner", "Natural", "Cross", "Outer"], correctIndex: 2 },
            { question: "Which indexing uses tree?", options: ["Hash", "B-Tree", "Bitmap", "Dense"], correctIndex: 1 },
            { question: "Which concurrency problem is phantom read?", options: ["Insert anomaly", "Delete anomaly", "Transaction issue", "Update anomaly"], correctIndex: 2 },
            { question: "Which recovery uses log?", options: ["Undo", "Redo", "Both", "None"], correctIndex: 2 },
            { question: "Which normal form handles multivalued dependency?", options: ["3NF", "BCNF", "4NF", "5NF"], correctIndex: 2 },
            { question: "Which file organization is fastest?", options: ["Sequential", "Heap", "Hash", "Indexed"], correctIndex: 2 },
            { question: "Which constraint ensures domain integrity?", options: ["CHECK", "UNIQUE", "PRIMARY", "FOREIGN"], correctIndex: 0 },
            { question: "Which SQL clause sorts result?", options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"], correctIndex: 1 },
            { question: "Which dependency violates 2NF?", options: ["Partial", "Transitive", "Multivalued", "Functional"], correctIndex: 0 },
            { question: "Which lock allows reading?", options: ["Exclusive", "Shared", "Binary", "Update"], correctIndex: 1 },
            { question: "Which transaction property is durability?", options: ["Atomicity", "Consistency", "Isolation", "Persistence"], correctIndex: 3 }
        ]
    },
    OS: {
        Easy: [
            { question: "OS stands for?", options: ["Open Software", "Operating System", "Order System", "Output Software"], correctIndex: 1 },
            { question: "Which is an OS?", options: ["Chrome", "Linux", "Oracle", "HTML"], correctIndex: 1 },
            { question: "OS acts as?", options: ["Compiler", "Interface", "Editor", "Loader"], correctIndex: 1 },
            { question: "Which OS is open source?", options: ["Windows", "Linux", "Mac", "DOS"], correctIndex: 1 },
            { question: "Which manages hardware?", options: ["CPU", "RAM", "OS", "User"], correctIndex: 2 },
            { question: "Which is real-time OS?", options: ["Windows", "Linux", "RTOS", "Unix"], correctIndex: 2 },
            { question: "Which is not OS?", options: ["Unix", "Linux", "Java", "Windows"], correctIndex: 2 },
            { question: "Which manages memory?", options: ["CPU", "Compiler", "OS", "User"], correctIndex: 2 },
            { question: "Which OS is single user?", options: ["Windows", "Unix", "Linux", "DOS"], correctIndex: 3 },
            { question: "Which is multitasking OS?", options: ["DOS", "Windows", "MS-DOS", "None"], correctIndex: 1 },
            { question: "Which part schedules process?", options: ["Kernel", "Shell", "User", "CPU"], correctIndex: 0 },
            { question: "Which OS is time-sharing?", options: ["Batch", "RTOS", "Unix", "Embedded"], correctIndex: 2 },
            { question: "Which is mobile OS?", options: ["Android", "Linux", "Unix", "DOS"], correctIndex: 0 },
            { question: "Which handles files?", options: ["CPU", "Memory", "OS", "Compiler"], correctIndex: 2 },
            { question: "Which is command interpreter?", options: ["Kernel", "Shell", "Loader", "Driver"], correctIndex: 1 }
        ],

        Medium: [
            { question: "Which scheduling is preemptive?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correctIndex: 2 },
            { question: "Which is non-preemptive?", options: ["Round Robin", "SJF", "Priority", "Multilevel"], correctIndex: 1 },
            { question: "Deadlock requires?", options: ["2 conditions", "3 conditions", "4 conditions", "5 conditions"], correctIndex: 2 },
            { question: "Which avoids deadlock?", options: ["Prevention", "Starvation", "Spooling", "Paging"], correctIndex: 0 },
            { question: "Which memory is fastest?", options: ["RAM", "Cache", "ROM", "Disk"], correctIndex: 1 },
            { question: "Paging removes?", options: ["Fragmentation", "External fragmentation", "Internal fragmentation", "Deadlock"], correctIndex: 1 },
            { question: "Which is logical address?", options: ["CPU", "Virtual", "Physical", "Disk"], correctIndex: 1 },
            { question: "Which scheduling uses time slice?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correctIndex: 2 },
            { question: "Which file system used in Linux?", options: ["NTFS", "FAT", "EXT4", "HFS"], correctIndex: 2 },
            { question: "Which is system call?", options: ["read()", "printf()", "cin", "cout"], correctIndex: 0 },
            { question: "Thrashing occurs due to?", options: ["CPU", "Disk", "Memory", "Printer"], correctIndex: 2 },
            { question: "Which is semaphore?", options: ["Variable", "Hardware", "Process", "Thread"], correctIndex: 0 },
            { question: "Which memory allocation is contiguous?", options: ["Paging", "Segmentation", "Fixed partition", "Virtual"], correctIndex: 2 },
            { question: "Which avoids starvation?", options: ["FCFS", "Aging", "Deadlock", "Spooling"], correctIndex: 1 },
            { question: "Which is multitasking?", options: ["Batch", "Single user", "Time sharing", "Real time"], correctIndex: 2 }
        ],

        Hard: [
            { question: "Which algorithm avoids deadlock?", options: ["Banker’s", "FCFS", "SJF", "Round Robin"], correctIndex: 0 },
            { question: "Which page replacement is optimal?", options: ["FIFO", "LRU", "Optimal", "Clock"], correctIndex: 2 },
            { question: "Which suffers Belady’s anomaly?", options: ["FIFO", "LRU", "Optimal", "LFU"], correctIndex: 0 },
            { question: "Which scheduling minimizes waiting time?", options: ["FCFS", "SJF", "RR", "Priority"], correctIndex: 1 },
            { question: "Which is critical section problem?", options: ["Deadlock", "Synchronization", "Paging", "Thrashing"], correctIndex: 1 },
            { question: "Which IPC uses shared memory?", options: ["Pipe", "Message Queue", "Semaphore", "Signal"], correctIndex: 2 },
            { question: "Which address binding is runtime?", options: ["Compile", "Load", "Execution", "Link"], correctIndex: 2 },
            { question: "Which OS structure is layered?", options: ["Monolithic", "Microkernel", "Layered", "Hybrid"], correctIndex: 2 },
            { question: "Which scheduling uses priority?", options: ["RR", "SJF", "Priority", "FCFS"], correctIndex: 2 },
            { question: "Which memory suffers internal fragmentation?", options: ["Paging", "Segmentation", "Virtual", "Swapping"], correctIndex: 0 },
            { question: "Which is spinlock?", options: ["Busy wait", "Sleep", "Block", "Signal"], correctIndex: 0 },
            { question: "Which file allocation is fastest?", options: ["Contiguous", "Linked", "Indexed", "Random"], correctIndex: 0 },
            { question: "Which supports multi-core?", options: ["Single OS", "Distributed OS", "Multiprocessing OS", "Batch OS"], correctIndex: 2 },
            { question: "Which OS supports threads?", options: ["DOS", "Unix", "Batch", "Single"], correctIndex: 1 },
            { question: "Which kernel is Linux?", options: ["Micro", "Monolithic", "Hybrid", "Layered"], correctIndex: 1 }
        ]
    }
};


let selectedCategory = "";
let selectedDifficulty = "";
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
const backToResultBtn = document.getElementById("back-to-result");


window.addEventListener("beforeunload", () => {
    clearInterval(overallTimerId);
    clearInterval(countdown);
});


if (startButton) {
    startButton.addEventListener("click", () => {
        selectedCategory = document.getElementById("category").value;
        selectedDifficulty = document.getElementById("difficulty").value;

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
    });
}



function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
if (backToResultBtn) {
    backToResultBtn.addEventListener("click", () => {
        window.location.href = "result.html";
    });
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
                   name="option"
                   id="option${i}"
                   value="${i}"
                   onclick="enableNext()">
            <label for="option${i}">${op}</label>
        </div>`;
    });

    questionDiv.innerHTML = `<h3>${q.question}</h3>${html}`;

    if (userAnswers[currentIndex] !== undefined) {
        document.getElementById(`option${userAnswers[currentIndex]}`).checked = true;
    }

    if (arr[currentIndex] <= 0) {
        lockOptions();
        if (nextButton) nextButton.disabled = false;
    }
    if (prevButton) {
        if (currentIndex === 0) {
            prevButton.classList.add("hidden");
        } else {
            prevButton.classList.remove("hidden");
        }
    }
    if (nextButton) nextButton.disabled = currentIndex === currentQuestion.length - 1;
}




function enableNext() {
    if (arr[currentIndex] <= 0) return;

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
            arr[currentIndex] = 0;
            lockOptions();
            saveAnswer();

            if (currentIndex < currentQuestion.length - 1) {
                currentIndex++;
                showQuestion();
            } else {
                localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
                calculateScore();
                localStorage.setItem("attemptSaved", "false");
                window.location.href = "result.html";
            }
        }

    }, 1000);
}
function lockOptions() {
    const options = document.querySelectorAll('input[name="option"]');
    options.forEach(op => op.disabled = true);
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
        localStorage.setItem("attemptSaved", "false");
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
        selectedDifficulty = localStorage.getItem("difficulty");

        currentQuestion = JSON.parse(
            JSON.stringify(quizData[selectedCategory][selectedDifficulty])
        );

        shuffleArray(currentQuestion);
        currentQuestion = currentQuestion.slice(0, 15);


        userAnswers = new Array(currentQuestion.length);
        calculateProgress();

        arr = Array(currentQuestion.length).fill(timePerQuestion);

        currentQuestion.forEach(q => {
            const ans = q.options[q.correctIndex];
            shuffleArray(q.options);
            q.correctIndex = q.options.indexOf(ans);
        });
        localStorage.setItem(
            "quizQuestions",
            JSON.stringify(currentQuestion)
        );


        overallTime = currentQuestion.length * timePerQuestion;
        startOverallTimer();
        showQuestion();
    }



    if (document.getElementById("result-quiz")) {
        displayScore.textContent = `${localStorage.getItem("score")}/15`;

        const isSaved = localStorage.getItem("attemptSaved");

        if (isSaved !== "true") {
            saveAttemptedLocalStorage();
            localStorage.setItem("attemptSaved", "true");
        }
    }



    if (document.getElementById("answer-review")) {
        selectedCategory = localStorage.getItem("category");
        userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
        selectedDifficulty = localStorage.getItem("difficulty");

        currentQuestion = JSON.parse(localStorage.getItem("quizQuestions"));

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
    }


    if (document.getElementById("attempt-container")) {
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
            localStorage.setItem("attemptSaved", "false");
            window.location.href = "result.html";
        }
    }, 1000);
}

if (retryButton) {
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
}

if (reviewAnswerButton) {
    reviewAnswerButton.addEventListener("click", () => {
        window.location.href = "review.html";
    });
}


