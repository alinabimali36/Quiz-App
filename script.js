const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        answer: "background-color"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: "<h1>"
    },
    {
        question: "What is the correct CSS syntax to make all the <p> elements bold?",
        options: ["p {font-weight: bold;}", "p {text-size: bold;}", "<p style='text-size:bold;'>", "p {font-style: bold;}"],
        answer: "p {font-weight: bold;}"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<scripting>", "<js>", "<script>"],
        answer: "<script>"
    },
    {
        question: "How do you select an element with id 'demo' in CSS?",
        options: [".demo", "#demo", "*demo", "demo"],
        answer: "#demo"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a url='http://www.test.com'>Test.com</a>", "<a>http://www.test.com</a>", "<a href='http://www.test.com'>Test</a>", "<a name='http://www.test.com'>Test.com</a>"],
        answer: "<a href='http://www.test.com'>Test</a>"
    },
    {
        question: "How do you add a comment in a CSS file?",
        options: ["// this is a comment", "/* this is a comment */", "' this is a comment", ""],
        answer: "/* this is a comment */"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "class", "styles", "style"],
        answer: "style"
    }
];

const quizCard = document.getElementById("quiz-card");
const resultsCard = document.getElementById("results-card");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const progressEl = document.getElementById("progress");
const timerText = document.getElementById("timer-text");
const questionCounterEl = document.getElementById("question-counter");
const finalScoreEl = document.getElementById("final-score");
const totalQuestionsEl = document.getElementById("total-questions");
