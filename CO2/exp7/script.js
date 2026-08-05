const questions = [
    {
        question: "Which HTML element is used to define the largest heading?",
        options: ["<h6>", "<h1>", "<head>", "<header>"],
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 2
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: [
            "color",
            "bgcolor",
            "background-color",
            "fill"
        ],
        answer: 2
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "static"
        ],
        answer: 2
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
            "msg('Hello World')",
            "alertBox('Hello World')",
            "alert('Hello World')",
            "print('Hello World')"
        ],
        answer: 2
    }
];

let currentIdx = 0;
let score = 0;
let timer;
let timeLeft = 15;

const startBtn = document.getElementById("start-btn");
const quizStart = document.getElementById("quiz-start");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");

const progress = document.getElementById("progress");
const countText = document.getElementById("question-count");
const timeDisplay = document.getElementById("time-left");

startBtn.addEventListener("click", () => {

    quizStart.classList.add("hidden");
    quizBox.classList.remove("hidden");

    loadQuestion();

    startTimer();

});

function loadQuestion() {

    clearInterval(timer);

    const q = questions[currentIdx];

    questionText.innerText = q.question;

    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {

        const div = document.createElement("div");

        div.className = "option";

        div.innerText = option;

        div.onclick = () => checkAnswer(index, div);

        optionsContainer.appendChild(div);

    });

    countText.innerText =
        `Question ${currentIdx + 1} of ${questions.length}`;

    progress.style.width =
        `${((currentIdx + 1) / questions.length) * 100}%`;

    nextBtn.classList.add("hidden");

    startTimer();

}

function checkAnswer(selectedIndex, selectedElement) {

    clearInterval(timer);

    const correctIndex = questions[currentIdx].answer;

    const options =
        document.querySelectorAll(".option");

    options.forEach(option => {

        option.classList.add("disabled");

    });

    if (selectedIndex === correctIndex) {

        if (selectedElement) {

            selectedElement.classList.add("correct");

        }

        score++;

    }

    else {

        if (selectedElement) {

            selectedElement.classList.add("wrong");

        }

        options[correctIndex].classList.add("correct");

    }

    nextBtn.classList.remove("hidden");

}

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {

    currentIdx++;

    if (currentIdx < questions.length) {

        loadQuestion();

    }

    else {

        showResult();

    }

}

function startTimer() {

    clearInterval(timer);

    timeLeft = 15;

    timeDisplay.innerText = timeLeft;

    timer = setInterval(() => {

        timeLeft--;

        timeDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            checkAnswer(-1, null);

        }

    }, 1000);

}

function showResult() {

    quizBox.classList.add("hidden");

    resultBox.classList.remove("hidden");

    document.getElementById("final-score").innerText = score;

    const percentage = (score / questions.length) * 100;

    let message = "";

    if (percentage === 100) {

        message = "🏆 Outstanding! Perfect Score!";

    }

    else if (percentage >= 80) {

        message = "🎉 Excellent Work!";

    }

    else if (percentage >= 60) {

        message = "👍 Good Job!";

    }

    else if (percentage >= 40) {

        message = "🙂 Nice Try! Keep Practicing.";

    }

    else {

        message = "📚 Keep Learning and Try Again!";

    }

    document.getElementById("score-message").innerHTML =

        `${message}<br><br>Your Score: ${percentage}%`;

}