function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum];
}
function getHumanChoice(){
    const x = prompt("Enter your choice").toLowerCase();
    return x;
}

function playGame(){
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
                case "DRAWWWW":
                    break;
            }
        }

    for(let round = 1; round <= 5; round++){
        playRound();
        console.log(`YOUR SCORE => ${humanScore}`);
        console.log(`COMPUTER SCORE => ${computerScore}`);
    }
    while(round = 5){
        if(humanScore === computerScore){
            console.log("ITS A DRAW");
        }else if(humanScore > computerScore){
            console.log("YOU ARE THE WINNER");
        }else console.log("HAHAHA TRY AGAIN");
        break;
    }
}

playGame()
