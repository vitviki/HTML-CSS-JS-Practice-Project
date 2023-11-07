const questions = [
  {
    ques: "Arrange the numbers in ascending order: 36, 12, 29, 21, 7.",
    a: "36, 29, 21, 12, 7",
    b: "36, 29, 7, 21, 12",
    c: "7, 12, 21, 29, 36",
    d: "29, 12, 38, 21, 7",
    ans: "c",
  },
  {
    ques: "Find the value of x; if x = (2 * 3) + 11.",
    a: "55",
    b: "192",
    c: "17",
    d: "66",
    ans: "c",
  },
  {
    ques: "The difference between the smallest number of four digits and the largest number of three digits is ……. .",
    a: "1",
    b: "100",
    c: "0",
    d: "999",
    ans: "a",
  },
  {
    ques: "Name a triangle whose two angles are equal.",
    a: "Right angle triangle",
    b: "Isosceles triangle",
    c: "Scalene triangle",
    d: "None of these",
    ans: "b",
  },
  {
    ques: "How many lines can be drawn through two points?",
    a: "1",
    b: "2",
    c: "3",
    d: "Not possible",
    ans: "a",
  },
  {
    ques: "When we multiply an exact number by zero what will be the exact answer?",
    a: "The exact number",
    b: "Cannot be multiplied",
    c: "Zero",
    d: "None of these",
    ans: "c",
  },
  {
    ques: "What is 999 times 100.0?",
    a: "199.0",
    b: "999.0",
    c: "9990",
    d: "99900",
    ans: "d",
  },
  {
    ques: "A long rope has to be cut to make 23 small pieces. If it is double folded to start with how many times does it need to be cut?",
    a: "9",
    b: "23",
    c: "11",
    d: "12",
    ans: "c",
  },
  {
    ques: "A clock seen through a mirror, shows quarter past three. What is the correct time shown by the clock?",
    a: "3.15",
    b: "8.45",
    c: "9.15",
    d: "9.45",
    ans: "b",
  },
  {
    ques: "10. 78 ÷ 5 ÷ 0.5 = ?",
    a: "15.6",
    b: "31.2",
    c: "7.8",
    d: "20.4",
    ans: "b",
  },
];

const score_element = document.getElementById("score");
const question = document.getElementById("question");
const options = document.getElementsByTagName("label");
const inputs = document.getElementsByTagName("input");
const nextQuestion_btn = document.getElementById("next_question_btn");
const submit_btn = document.getElementById("submit_btn");
const result_text = document.getElementById("result_text");
let count = 0;
let score = 0;
let correctAnswer;

const loadQuestion = () => {
  if (count >= questions.length) return;

  const chosenQuestion = questions[count++];
  question.innerText = chosenQuestion.ques;
  options[0].innerText = chosenQuestion.a;
  options[1].innerText = chosenQuestion.b;
  options[2].innerText = chosenQuestion.c;
  options[3].innerText = chosenQuestion.d;
  correctAnswer = chosenQuestion.ans;

  // Clear all input selections
  for (radioInput of inputs) {
    radioInput.checked = false;
  }

  // Hide the result text.
  result_text.style.visibility = "hidden";
};

const displayResult = (answerCorrect) => {
  console.log(result_text);
  if (!answerCorrect) {
    result_text.innerText =
      "Incorrect selection. Please select the correct answer!";
    result_text.style.color = "red";
  } else {
    result_text.innerText = "Hooray! Your answer is correct!";
    result_text.style.color = "green";
    score_element.innerText = score;
  }
  result_text.style.visibility = "visible";
};

const onSubmit = () => {
  let answerCorrect = false;
  for (let selectedAnswer of inputs) {
    if (selectedAnswer.checked) {
      if (selectedAnswer.value === correctAnswer) {
        answerCorrect = true;
        score += 10;
        break;
      }
    }
  }

  displayResult(answerCorrect);

  if (answerCorrect) setTimeout(loadQuestion, 2000);
};

// Load the initial quesion
loadQuestion();

submit_btn.addEventListener("click", onSubmit);
