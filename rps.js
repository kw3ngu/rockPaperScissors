function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum];
}
function getHumanChoice(){
    const x = prompt("Enter your choice").toLowerCase();
    return x;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`You choose => ${humanChoice}`);
    console.log(`Computer chooses => ${computerChoice}`);

    let result = "" 

    if(humanChoice === computerChoice){
        result = "DRAWWWW"
    }
    else{
        switch(humanChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "LOSERRR";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "LOSERRR";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "LOSERRR";
                break;
        }
    }
    console.log(result)
    switch(result){
        case "YOU WIN":
            humanScore++;
            break;
        case "LOSERRR":
            computerScore++;
            break;
    }

    console.log(`YOUR SCORE: ${humanScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);
}
playRound()


