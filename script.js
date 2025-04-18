let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return "Rock";
    else if (choice == 1)
        return "Paper";
    else
        return "Scissors";
}

function getHumanChoice(){
    return prompt("Select Rock/Paper/Scissors");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = (humanChoice.at(0)).toUpperCase() + (humanChoice.substr(1)).toLowerCase();
    if (humanChoice != computerChoice) {
        let result = "";
        switch (humanChoice) {
            case "Rock" : result = (computerChoice == "Scissors")?
                                    "win" :  "lose";
                        break;
            case "Paper" : result = (computerChoice == "Rock")?
                                    "win" :  "lose";
                        break;
            default : result = (computerChoice == "Paper")?
                                "win" :  "lose";
        }
        if (result == "win") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
        else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }
    else {
        console.log("Tie");
    }
}

function playGame(){
    for (let i = 0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore==computerScore)
        console.log("Tie");
    else
        console.log(`${(humanScore>computerScore)?"You are ":"Computer is "}the Winner!!! `);
}

playGame();