let human_score = 0;
let computer_score = 0;

// Function to calculate the result of a round
function calculate(human_choice) {
    // Random choice for the computer
    const choices = ["rock", "paper", "scissors"];
    const comp_choice = choices[Math.floor(Math.random() * 3)];

    // Calculating the result of the round
    if (human_choice === comp_choice) {
        // It's a draw, no one gets a point
        updateResult(`It's a draw! Computer chose: ${comp_choice}.`);
    } else if (human_choice === "rock" && comp_choice === "paper") {
        computer_score++;
        updateResult(`You lost! Computer chose: ${comp_choice}.`);
    } else if (human_choice === "paper" && comp_choice === "rock") {
        human_score++;
        updateResult(`You won! Computer chose: ${comp_choice}.`);
    } else if (human_choice === "rock" && comp_choice === "scissors") {
        human_score++;
        updateResult(`You won! Computer chose: ${comp_choice}.`);
    } else if (human_choice === "scissors" && comp_choice === "rock") {
        computer_score++;
        updateResult(`You lost! Computer chose: ${comp_choice}.`);
    } else if (human_choice === "scissors" && comp_choice === "paper") {
        human_score++;
        updateResult(`You won! Computer chose: ${comp_choice}.`);
    } else {
        computer_score++;
        updateResult(`You lost! Computer chose: ${comp_choice}.`);
    }

    // Update the scores on the page
    updateScores();
}

// Function to update result text
function updateResult(resultText) {
    const result = document.querySelector("#result");
    
    result.textContent = resultText;
}

// Function to update the score display
function updateScores() {
    const humanScoreDisplay = document.querySelector("#humanScore");
    const computerScoreDisplay = document.querySelector("#computerScore");
    humanScoreDisplay.textContent = `Human Score: ${human_score}`;
    computerScoreDisplay.textContent = `Computer Score: ${computer_score}`;
}

// Set up event listeners for each button
document.querySelector("#rock").addEventListener("click", () => calculate("rock"));
document.querySelector("#paper").addEventListener("click", () => calculate("paper"));
document.querySelector("#scissors").addEventListener("click", () => calculate("scissors"));
