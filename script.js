const soundEffects =[
    new Audio(),
    new Audio(),
    new Audio(),
];

function playRandomSound(){
    const randomIndex = Math.floor(Math.random() * soundeffects.length);
    const sound = soundEffects[randomIndex];
    sound.play();
}

    
const questions = [
    {
        question: "When you are free, you like:",
        choices: [
            { text: "Meeting new people interests you", points: 10 },
            { text: "Reading or learning something is more you", points: 5 },
            { text: "Venturing into the great outdoors", points: 8 },
            { text: "Seeking solitude: homebody", points: 3 },
            { text: "Hanging with family is the best", points: 2 }
        ]
    },
    {
        question: "When faced with a challenge, you tend to:",
        choices: [
            { text: "Seek help from others", points: 8 },
            { text: "Work on it independently", points: 2 },
            { text: "Take a break and come back to it later", points: 3 },
            { text: "Lock in", points: 5 }
        ]
    },
    {
        question: "Your dream vacation is:",
        choices: [
            { text: "Relaxing on a remote island like Easter Island", points: 3 },
            { text: "Exploring a new and big city like New York", points: 8 },
            { text: "Going on an unplanned road trip across the country", points: 10 },
            { text: "Wandering aimlessly on a peaceful nature walk", points: 5 }
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
