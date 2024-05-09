let userScore = 0;
let computerScore = 0;
const choices_div = document.querySelector(".choices")
const rockPara = document.querySelector("#rock");
const paperPara = document.querySelector("#paper");
const scissorsPara = document.querySelector("#scissors");
const playerPara = document.querySelector("#player")
const compPara = document.querySelector("#computer")
const resultPara = document.querySelector(".result");
const computerDisplay = document.querySelector("#compDisplay");




rockPara.addEventListener('click', () => {
    playGame("rock");
})

paperPara.addEventListener('click', () => {
    playGame("paper");
})

scissorsPara.addEventListener('click', () => {
    playGame("scissor");
})



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playGame(userChoice) {
    let result = "";
    const computerChoice = getComputerChoice();
    computerDisplay.textContent = `Computer chose ${computerChoice}`;

    if(userChoice === computerChoice){
        result = "ITS A DRAW";
    }else {
        switch(userChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    resultPara.textContent = result;


        switch(result){
            case "YOU WIN":
                resultPara.classList.add("greentext");
                userScore++;
                playerPara.textContent = userScore;
                break;
            case "YOU LOSE":
                resultPara.classList.add("redtext");
                computerScore++;
                compPara.textContent = computerScore;
                break;
            case "ITS A DRAW":
                resultPara.classList.remove("greentext", "redtext");
                userScore;
                computerScore;
                break;
        }

}


