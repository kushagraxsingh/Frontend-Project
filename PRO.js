// 50 questions: HTML, CSS, JS (simple MCQs)
const allQuestions = [
  {
    q: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    q: "Which tag is used for the largest heading in HTML?",
    options: ["<head>", "<h6>", "<h1>", "<heading>"],
    answer: 2
  },
  {
    q: "Which HTML element is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: 0
  },
  {
    q: "Which attribute is used to provide alternate text for an image?",
    options: ["title", "src", "alt", "href"],
    answer: 2
  },
  {
    q: "Which tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 0
  },
  {
    q: "Which tag is used to insert a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: 1
  },
  {
    q: "Which HTML element is used to insert an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: 0
  },
  {
    q: "Where is the correct place to put the <title> tag?",
    options: ["Inside <body>", "Inside <head>", "After </html>", "Anywhere"],
    answer: 1
  },
  {
    q: "Which attribute specifies the destination URL of a link?",
    options: ["src", "href", "link", "url"],
    answer: 1
  },
  {
    q: "Which tag is used to create a table row?",
    options: ["<tr>", "<td>", "<th>", "<row>"],
    answer: 0
  },
  {
    q: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: 1
  },
  {
    q: "Which property is used to change text color in CSS?",
    options: ["background-color", "font-color", "color", "text-color"],
    answer: 2
  },
  {
    q: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "size"],
    answer: 2
  },
  {
    q: "How do you select an element with id='main' in CSS?",
    options: ["main", ".main", "#main", "*main"],
    answer: 2
  },
  {
    q: "How do you select elements with class='box' in CSS?",
    options: [".box", "#box", "box", "*box"],
    answer: 0
  },
  {
    q: "Which property is used to change the background color?",
    options: ["color", "background-color", "bgcolor", "background"],
    answer: 1
  },
  {
    q: "Which property is used to center text?",
    options: ["text-align", "align-text", "center-text", "font-align"],
    answer: 0
  },
  {
    q: "Which value of display makes an element start on a new line?",
    options: ["inline", "block", "flex", "grid"],
    answer: 1
  },
  {
    q: "Which property is used to add space inside a border?",
    options: ["margin", "padding", "border", "gap"],
    answer: 1
  },
  {
    q: "Which property is used to add space outside a border?",
    options: ["margin", "padding", "border", "gap"],
    answer: 0
  },
  {
    q: "What does JS stand for?",
    options: [
      "JavaSource",
      "JavaScript",
      "JustScript",
      "Jolly Script"
    ],
    answer: 1
  },
  {
    q: "Which HTML tag is used to include JavaScript code?",
    options: ["<javascript>", "<js>", "<script>", "<code>"],
    answer: 2
  },
  {
    q: "How do you write a single-line comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    answer: 1
  },
  {
    q: "Which symbol is used for assignment in JavaScript?",
    options: ["==", "=", "===", ":"],
    answer: 1
  },
  {
    q: "How do you show an alert box in JavaScript?",
    options: [
      "msg('Hello')",
      "alert('Hello')",
      "message('Hello')",
      "popup('Hello')"
    ],
    answer: 1
  },
  {
    q: "Which keyword is used to declare a variable that can change?",
    options: ["const", "var", "static", "define"],
    answer: 1
  },
  {
    q: "Which operator is used to add two numbers in JavaScript?",
    options: ["+", "-", "*", "/"],
    answer: 0
  },
  {
    q: "How do you write an if statement in JavaScript?",
    options: [
      "if condition then {}",
      "if (condition) {}",
      "if {condition} ()",
      "if: condition {}"
    ],
    answer: 1
  },
  {
    q: "How do you write a function in JavaScript?",
    options: [
      "function = myFunc() {}",
      "function myFunc() {}",
      "func myFunc() {}",
      "myFunc function() {}"
    ],
    answer: 1
  },
  {
    q: "Which method writes a message to the browser console?",
    options: [
      "console.write()",
      "log.console()",
      "console.log()",
      "print()"
    ],
    answer: 2
  },
  {
    q: "Which event occurs when a user clicks on an element?",
    options: ["onchange", "onload", "onclick", "onstart"],
    answer: 2
  },
  {
    q: "Which keyword is used to stop a loop?",
    options: ["stop", "return", "break", "exit"],
    answer: 2
  },
  {
    q: "Which method can be used to get an element by its id?",
    options: [
      "document.getId()",
      "document.getElementById()",
      "document.id()",
      "document.queryId()"
    ],
    answer: 1
  },
  {
    q: "Which type of language is JavaScript?",
    options: [
      "Markup language",
      "Style sheet language",
      "Programming language",
      "Database language"
    ],
    answer: 2
  },
  {
    q: "What is the correct file extension for JavaScript files?",
    options: [".js", ".java", ".javascript", ".script"],
    answer: 0
  },
  {
    q: "Which HTML element is used to define a paragraph?",
    options: ["<para>", "<p>", "<par>", "<pg>"],
    answer: 1
  },
  {
    q: "Which HTML element is used to define important text?",
    options: ["<i>", "<b>", "<strong>", "<mark>"],
    answer: 2
  },
  {
    q: "Which CSS property makes text bold?",
    options: ["font-style", "font-weight", "text-style", "text-weight"],
    answer: 1
  },
  {
    q: "Which CSS property is used to change the font?",
    options: ["font-family", "font-type", "text-font", "font-name"],
    answer: 0
  },
  {
    q: "Which tag is used to create a form in HTML?",
    options: ["<input>", "<form>", "<label>", "<fieldset>"],
    answer: 1
  },
  {
    q: "Which input type is used for a checkbox?",
    options: ["type=\"radio\"", "type=\"checkbox\"", "type=\"check\"", "type=\"box\""],
    answer: 1
  },
  {
    q: "Which HTML tag is used to make text italic?",
    options: ["<b>", "<i>", "<strong>", "<emphasis>"],
    answer: 1
  },
  {
    q: "Which attribute is used to open a link in a new tab?",
    options: ["open=\"new\"", "target=\"_blank\"", "new=\"tab\"", "href=\"_blank\""],
    answer: 1
  },
  {
    q: "Which CSS property is used to add a border?",
    options: ["outline", "border", "frame", "edge"],
    answer: 1
  },
  {
    q: "Which of these is a JavaScript data type?",
    options: ["number", "float", "character", "byte"],
    answer: 0
  },
  {
    q: "How do you create an array in JavaScript?",
    options: [
      "var a = (1,2,3)",
      "var a = [1,2,3]",
      "var a = {1,2,3}",
      "var a = <1,2,3>"
    ],
    answer: 1
  },
  {
    q: "Which method joins array elements into a string?",
    options: ["join()", "concat()", "link()", "attach()"],
    answer: 0
  },
  {
    q: "Which HTML5 element is used for navigation links?",
    options: ["<navigate>", "<nav>", "<links>", "<menu>"],
    answer: 1
  },
  {
    q: "Which CSS property sets the width of an element?",
    options: ["size", "length", "width", "space"],
    answer: 2
  },
  {
    q: "Which JavaScript method shows a message with OK and Cancel?",
    options: ["confirm()", "alert()", "prompt()", "message()"],
    answer: 0
  }
];

// pick random 15 questions
function getRandomQuestions() {
  const copy = [...allQuestions];
  copy.sort(() => Math.random() - 0.5);
  return copy.slice(0, 15);
}

const quizQuestions = getRandomQuestions();
let currentIndex = 0;
// store selected options, -1 means not answered
let userAnswers = new Array(quizQuestions.length).fill(-1);

// elements
const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

const qNumber = document.getElementById("question-number");
const qText = document.getElementById("question-text");
const optionTexts = [
  document.getElementById("opt0"),
  document.getElementById("opt1"),
  document.getElementById("opt2"),
  document.getElementById("opt3")
];

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

startBtn.onclick = function () {
  startPage.classList.add("hidden");
  quizPage.classList.remove("hidden");
  showQuestion();
};

function showQuestion() {
  const q = quizQuestions[currentIndex];
  qNumber.textContent = "Question " + (currentIndex + 1) + " of " + quizQuestions.length;
  qText.textContent = q.q;
  for (let i = 0; i < 4; i++) {
    optionTexts[i].textContent = q.options[i];
  }

  // clear selection
  const radios = document.querySelectorAll("input[name='option']");
  radios.forEach(r => r.checked = false);

  // show previously selected answer if any
  if (userAnswers[currentIndex] !== -1) {
    radios[userAnswers[currentIndex]].checked = true;
  }

  // handle buttons visibility
  prevBtn.disabled = currentIndex === 0;
  if (currentIndex === quizQuestions.length - 1) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
}

function saveAnswer() {
  const radios = document.querySelectorAll("input[name='option']");
  let selected = -1;
  radios.forEach(r => {
    if (r.checked) {
      selected = parseInt(r.value);
    }
  });
  userAnswers[currentIndex] = selected;
}

prevBtn.onclick = function () {
  saveAnswer();
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
};

nextBtn.onclick = function () {
  saveAnswer();
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    showQuestion();
  }
};

submitBtn.onclick = function () {
  saveAnswer();
  showResults();
};

function showResults() {
  quizPage.classList.add("hidden");
  resultPage.classList.remove("hidden");

  let score = 0;
  const reviewDiv = document.getElementById("answers-review");
  reviewDiv.innerHTML = "";

  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i];
    const userAns = userAnswers[i];
    const correctAns = q.answer;

    if (userAns === correctAns) {
      score++;
    }

    const box = document.createElement("div");
    box.className = "answer-box";

    const qTitle = document.createElement("p");
    qTitle.textContent = "Q" + (i + 1) + ": " + q.q;
    box.appendChild(qTitle);

    const userP = document.createElement("p");
    if (userAns === -1) {
      userP.textContent = "Your answer: Not answered";
      userP.className = "wrong";
    } else {
      userP.textContent = "Your answer: " + q.options[userAns];
      userP.className = userAns === correctAns ? "correct" : "wrong";
    }
    box.appendChild(userP);

    if (userAns !== correctAns) {
      const correctP = document.createElement("p");
      correctP.textContent = "Correct answer: " + q.options[correctAns];
      correctP.className = "correct";
      box.appendChild(correctP);
    }

    reviewDiv.appendChild(box);
  }

  const scoreText = document.getElementById("score-text");
  scoreText.textContent = "You scored " + score + " out of " + quizQuestions.length + ".";
}