const questions = [
    {
      question: "Qual foi nosso segundo date?",
      answer: "terreiro"
    },
    {
      question: "Qual foi o primeiro elogio que eu te fiz?",
      answer: "elogiei sua boca e seus olhos"
    },
    {
      question: "Qual foi nosso filme mais simbólico?",
      answer: "elementos"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  const questionText = document.getElementById("question-text");
  const answerInput = document.getElementById("answer-input");
  const submitButton = document.getElementById("submit-button");
  const feedback = document.getElementById("feedback");
  const quizContainer = document.getElementById("quiz-container");
  const galleryContainer = document.getElementById("gallery-container");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerInput.value = ""; // Limpa o campo de resposta
    feedback.textContent = ""; // Limpa o feedback
  }
  
  function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Resposta certa! 🌟";
      feedback.style.color = "lime";
  
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          loadQuestion();
        } else {
          showGallery();
        }
      }, 1000);
    } else {
      feedback.textContent = "Resposta errada. Tente novamente! 💫";
      feedback.style.color = "red";
    }
  }
  
  function showGallery() {
    quizContainer.classList.add("hidden");
    galleryContainer.classList.remove("hidden");
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  // Carrega a primeira pergunta ao iniciar o site
  document.addEventListener("DOMContentLoaded", loadQuestion);
  