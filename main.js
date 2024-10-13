const questions = [
    {
        question: "You prefer to spend your free time:",
        choices: [
            { text: "With friends", points: 10 },
            { text: "Reading or learning something new", points: 5 },
            { text: "Going outdoors or exploring", points: 8 },
            { text: "Relaxing by yourself", points: 3 }
            {text: "Hanging with family", points:2}
          
          
        ]
    },
    {
        question: "When faced with a challenge, you tend to:",
        choices: [
            { text: "Seek help from others", points: 5 },
            { text: "Work on it independently", points: 8 },
            { text: "Take a break and come back to it later", points: 3 },
            { text: "Tackle it head-on immediately", points: 10 }
        ]
    },
    {
        question: "Your ideal vacation is:",
        choices: [
            { text: "Relaxing on a beach", points: 3 },
            { text: "Visiting a big city", points: 5 },
            { text: "Going on an adventure", points: 10 },
            { text: "Exploring a quiet, natural place", points: 8 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="answer" value="${choice.points}"> ${choice.text}`;
        choicesElement.appendChild(li);
    });
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    const answerPoints = parseInt(selectedAnswer.value);
    totalScore += answerPoints;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").textContent = `Your total score is: ${totalScore}`;
    
    // Display personality type or result based on score
    const resultElement = document.getElementById("result");
    if (totalScore <= 15) {
        resultElement.textContent = "You are an introvert, enjoying calm and solitary activities.";
    } else if (totalScore <= 25) {
        resultElement.textContent = "You are a balanced individual, enjoying a mix of social and personal time.";
    } else {
        resultElement.textContent = "You are an extrovert, thriving in social and adventurous situations!";
    }
}

window.onload = function () {
    displayQuestion();
};
