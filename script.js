
let computerScore = 0;
let humanScore = 0;



function playRound(humanAnswer, computerAnswer){
    humanAnswer = humanAnswer.toLowerCase();
    computerAnswer = computerAnswer.toLowerCase();
   
    // start rock logic
    if (humanAnswer == "rock" && computerAnswer == "rock"){
        return "Draw";
    }
    else if(humanAnswer == "rock" && computerAnswer == "paper"){
        return "You Lose!"
        computerScore = 1;
    }
    else if(humanAnswer == "rock" && computerAnswer == "scissors"){
        return "You Win!"
        humanScore = 1;
    }
     // start paper logic
    if (humanAnswer == "paper" && computerAnswer == "paper"){
        return "Draw";
    }
    else if(humanAnswer == "paper" && computerAnswer == "scissors"){
        return "You Lose!"
        computerScore = 1;
    }
    else if(humanAnswer == "paper" && computerAnswer == "rock"){
        return "You Win!"
        humanScore = 1;
    }
    // start scissors logic
    if (humanAnswer == "scissors" && computerAnswer == "scissors"){
        return "Draw";
    }
    else if(humanAnswer == "scissors" && computerAnswer == "rock"){
        return "You Lose!"
        computerScore = 1;
    }
    else if(humanAnswer == "scissors" && computerAnswer == "paper"){
        return "You Win!"
        humanScore = 1;
    }
}

// log the results as +1 

function playGame(){

    
        function getComputerChoice (){
        let a = Math.random();

        if (a<= .33){
            return "Rock";
        }
        else if (a>.33 && a<=.66){
            return "Paper";
        }
        else{
            return "Scissors";
        }
        }

    function getHumanChoice(){
        let answer = prompt("Enter: Rock, Paper, or Scissors", "Enter Here");
        return answer;
    }

    let humanAnswer = getHumanChoice();
    console.log("You Picked: " + humanAnswer);

    let computerAnswer = getComputerChoice();
    console.log("The Computer Picked: " + computerAnswer);

    let round1 = playRound(humanAnswer,computerAnswer);
    console.log(round1);   

if (round1 == "You Win!"){
    humanScore += 1;
}
else if (round1 == "You Lose!"){
    computerScore +=1;
}
console.log(humanScore);
console.log(computerScore);

}




for (i = 0; i < 5; i ++){
    playGame();
    
}

if (humanScore > computerScore){
    console.log("You are the winner of the series!!");
}

if (humanScore < computerScore){
    console.log("You are the loser of the series :(");
}

if(humanScore == computerScore){
    console.log("The Series is a Draw.");
}