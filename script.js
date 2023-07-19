// Define the quiz questions and answers
const questions = [
    {
      question: "Do you take blood thinners?",
      choices: ["YES", "NO"],
      correctAnswer: 0
    },
    {
      question: "Are you allergic to latex?",
      choices: ["YES", "NO"],
      correctAnswer: 0
    },
    {
      question: "Have you ever had this problem before?",
      choices: ["YES", "NO"],
      correctAnswer: 0
    },
    {
      question: "Have you received any treatment for this problem?",
      choices: ["YES", "NO"],
      correctAnswer: 0
    },
    {
      question: "Do you have or have you had a recent illness or infection?",
      choices: ["YES", "NO"],
      correctAnswer: 0
    }
  ];
  
  // Initialize variables
  let currentQuestion = 0;
  let score = 0;
  
  // Function to display the current question
  function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesContainer = document.getElementById("choices-container");
  
    // Clear previous question
    questionText.textContent = "";
    choicesContainer.innerHTML = "";
  
    // Display current question
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
  
    // Display choices
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => {
        checkAnswer(index);
      });
      choicesContainer.appendChild(button);
    });
  }
  
  // Function to check the answer and proceed to the next question
  function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    // Check if all questions are answered
    if (currentQuestion === questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
  
  // Function to end the quiz and save initials and score
  function endQuiz() {
    const initials = prompt("Please enter your initials:");
    const quizResult = {
      initials: initials,
      score: score
    };
  
    // Save the quiz result (you can modify this part to store the result as per your requirement)
    console.log(quizResult);
  }
  
  // Event listener for the start button
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {
    displayQuestion();
  });
  