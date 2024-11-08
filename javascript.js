let human_score = 0;
let computer_score = 0;

function calculate() {
    let human_choice = prompt("Enter your choice: rock, paper, scissor");
    let comp = Math.floor(Math.random() * 3);
    let comp_choice = "rock";
    
    if (comp == 0) {
        comp_choice = "rock";
    } else if (comp == 1) {
        comp_choice = "paper";
    } else {
        comp_choice = "scissor";
    }

    // Calculating scores
    if (human_choice === comp_choice) {
        human_score++;
        computer_score++;
    } else if (human_choice === "rock" && comp_choice === "paper") {
        computer_score++;
    } else if (human_choice === "paper" && comp_choice === "rock") {
        human_score++;
    } else if (human_choice === "rock" && comp_choice === "scissor") {
        human_score++;
    } else if (human_choice === "scissor" && comp_choice === "rock") {
        computer_score++;
    } else if (human_choice === "scissor" && comp_choice === "paper") {
        human_score++;
    } else {
        computer_score++;
    }
    console.log("Human score is: " + human_score);
    console.log("Computer score is: " + computer_score);
}

let time = parseInt(prompt("How many rounds do you want to play? "), 10);
while (time--) {
    calculate();
}


