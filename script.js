const landingPage = document.querySelector("#landingPage");
const rockPaperScissors = document.querySelector(".rockPaperScissors");
let myInterval = undefined;
let humanInterval = undefined;
let computerInterval = undefined;
const play = document.querySelector("#play");
const playing = document.querySelector("#playing");
const humanChoice = document.querySelector("#choice > .human");
const computerChoice = document.querySelector("#choice > .computer");
const playRound = document.querySelector("#playRound");
const options = document.querySelector("#options");
let humanOption = undefined;
let computerOption = undefined;
let hScore = 0;
let cScore = 0;
const roundResult = document.querySelector("#choice > .result");
const winner = document.querySelector(".winner");
const humanScore = document.querySelector(".humanScore");
const computerScore = document.querySelector(".computerScore");

function animation(elem) {
    let arr = ["🪨","📰","✂️"];
    let index = Math.floor(Math.random()*3);
    elem.textContent = `${arr[index]}`;
    return arr[index];
}

if (landingPage.classList[0] == null) {
    myInterval = setInterval(animation, 300, rockPaperScissors);
}

play.addEventListener("click", () => {
    if (winner.classList[1] == null) {
        winner.classList.toggle("inactive");
        roundResult.classList.toggle("inactive");
        humanChoice.classList.toggle("inactive");
        computerChoice.classList.toggle("inactive");
    }
    clearInterval(myInterval);
    humanScore.textContent = hScore;
    computerScore.textContent = cScore;
    landingPage.classList.toggle("inactive");
    playing.classList.toggle("inactive");
    humanInterval = setInterval(animation, 200, humanChoice);
    computerInterval = setInterval(animation, 200, computerChoice);
});


playRound.addEventListener("click", () => {
    if (roundResult.classList[1] == null) {
        roundResult.classList.toggle("inactive");
        humanChoice.classList.toggle("inactive");
        computerChoice.classList.toggle("inactive");
        humanInterval = setInterval(animation, 200, humanChoice);
        computerInterval = setInterval(animation, 200, computerChoice);
    }
    playRound.classList.toggle("inactive");
    options.classList.toggle("inactive");
});

options.addEventListener("click", (e) => {
    clearInterval(humanInterval);
    clearInterval(computerInterval);
    display(e.target);
    computerOption = animation(computerChoice);
    setTimeout(result, 2000);
});

function display(option) {
    humanChoice.textContent = option.textContent;
    humanOption = option.textContent;
}

function result() {
    if (humanOption === computerOption) {
        roundResult.textContent = "Tie";
    }
    else {
        let temp = hScore;
        switch (humanOption) {
            case "🪨" :if (computerOption === "✂️")
                            hScore++;
                        else    
                            cScore++;
                        break;
            case "📰" :if (computerOption === "🪨")
                            hScore++;
                        else    
                            cScore++;
                        break;
            default :if (computerOption === "📰")
                        hScore++;
                    else    
                        cScore++;
                    break;
        }
        roundResult.textContent = "Round Winner! "+((hScore>temp)?"🙎🏼":"🤖");
    }

    humanChoice.classList.toggle("inactive");
    computerChoice.classList.toggle("inactive");
    roundResult.classList.toggle("inactive");
    playRound.classList.toggle("inactive");
    options.classList.toggle("inactive");

    humanScore.textContent = hScore;
    computerScore.textContent = cScore;

    if (hScore == 5 || cScore == 5){
        winner.textContent = "Winner!!!"+((hScore==5)?"🙎🏼":"🤖");
        myInterval = setInterval(animation, 300, rockPaperScissors);
        winner.classList.toggle("inactive");
        playing.classList.toggle("inactive");
        landingPage.classList.toggle("inactive");
        hScore = 0;
        cScore = 0;
    }
}


/* Used for playing on console

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
*/