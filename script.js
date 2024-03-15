
let actualWinner = document.querySelector("#actualWinner")
let buttonRock = document.querySelector("#rock");
let buttonPaper = document.querySelector("#paper");
let buttonScissors = document.querySelector("#scissors");
let playerScore = document.querySelector("#playerScore")
let computerScore = document.querySelector("#computerScore")
let pScore = 0
let cScore = 0 

function getComputerChoise(){
  let rand = Math.floor(Math.random() * 3) + 1 ;
  switch (rand){
      case 1:
       return "rock"
      case 2:
       return "paper"
      case 3:
       return "scissors"
   }        
}   

function playRound(playerSelection){
    
  //Makes sure that the prompt is correct 
  
   let computerSelection = getComputerChoise();

   ///Search for the winner
   if(playerSelection == computerSelection){
       return "Draw"
   }

   if(playerSelection == "rock" && computerSelection == "scissors"){
     pScore += 1
     playerScore.textContent = ""
     playerScore.textContent = "Your Score: " + pScore
     if (pScore == 5){
      alert("Congratulation you Win!!!")
      pScore = 0
      cScore = 0
      playerScore.textContent = "Your Score: 0"
      computerScore.textContent = "Your Score: 0"
     }
     return "You Win! Rock beats Scissors"
   }
   else if(playerSelection == "scissors" && computerSelection == "paper"){
    pScore += 1
    playerScore.textContent = ""
    playerScore.textContent = "Your Score: " + pScore
    if (pScore == 5){
     alert("Congratulation you Win!!!")
     pScore = 0
     cScore = 0
     playerScore.textContent = "Your Score: 0"
     computerScore.textContent = "Your Score: 0"
    }
       return "You Win! Scissors beats Paper"
   }
   else if(playerSelection == "paper" && computerSelection == "rock"){
    pScore += 1
    playerScore.textContent = ""
    playerScore.textContent = "Your Score: " + pScore
    if (pScore == 5){
     alert("Congratulation you Win!!!")
     pScore = 0
     cScore = 0
     playerScore.textContent = "Your Score: 0"
     computerScore.textContent = "Your Score: 0"
    }
    return "You Win! Paper beats Rock"
   }

   else if(computerSelection == "rock" && playerSelection == "scissors"){
    cScore += 1
    computerScore.textContent = ""
    computerScore.textContent = "Computer Score: " + cScore
    if (cScore == 5){
     alert("Oh no, you Lost!!!")
     pScore = 0
     cScore = 0
     playerScore.textContent = "Your Score: 0"
     computerScore.textContent = "Your Score: 0"
    }
    return "You Lose! Rock beats Scissors"
   }
   else if(computerSelection == "scissors" && playerSelection == "paper"){
    cScore += 1
    computerScore.textContent = ""
    computerScore.textContent = "Computer Score: " + cScore
    if (cScore == 5){
     alert("Oh no, you Lost!!!")
     pScore = 0
     cScore = 0
     playerScore.textContent = "Your Score: 0"
     computerScore.textContent = "Your Score: 0"
    }
    return "You Lose! Scissors beats Paper"
   }
   else if(computerSelection == "paper" && playerSelection == "rock"){
    cScore += 1
    computerScore.textContent = ""
    computerScore.textContent = "Computer Score: " + cScore
    if (cScore == 5){
     alert("Oh no, you Lost!!!")

    }
    return "You Lose! Paper beats Rock"
   }
}


buttonRock.addEventListener("click", function() {
   actualWinner.textContent = ""
   actualWinner.textContent  += (playRound("rock")); 
});

buttonPaper.addEventListener("click", function() {
   actualWinner.textContent = ""
   actualWinner.textContent  += (playRound("paper")); 
});

buttonScissors.addEventListener("click", function() {
   actualWinner.textContent = ""
   actualWinner.textContent  += (playRound("scissors"));  
});
 
 
/*
    function getComputerChoise(){
        let rand = Math.floor(Math.random() * 3) + 1 ;
        switch (rand){
            case 1:
             return "rock"
            case 2:
             return "paper"
            case 3:
             return "scissors"
         }        
     }   

     function playRound(playerSelection){

       //let playerSelection = prompt("Rock, Paper or Scissors?");
       //Makes sure that the prompt is correct 
       for (let i = 0; i = 1; ){
         if (playerSelection == "paper" || playerSelection == "rock" || playerSelection == "scissors"){
            break
         }
         else{
            alert("Invalid Choice")
            playerSelection = prompt("Rock, Paper or Scissors?")
         }
       }
       
        let computerSelection = getComputerChoise();

        ///Search for the winner
        if(playerSelection == computerSelection){
            return "Draw"
        }

        if(playerSelection == "rock" && computerSelection == "scissors"){
          return "You Win! Rock beats Scissors"
        }
        else if(playerSelection == "scissors" && computerSelection == "paper"){
            return "You Win! Scissors beats Paper"
        }
        else if(playerSelection == "paper" && computerSelection == "rock"){
         return "You Win! Paper beats Rock"
        }
        else if(computerSelection == "rock" && playerSelection == "scissors"){
         return "You Lose! Rock beats Scissors"
        }
        else if(computerSelection == "scissors" && playerSelection == "paper"){
         return "You Lose! Scissors beats Paper"
        }
        else if(computerSelection == "paper" && playerSelection == "rock"){
         return "You Lose! Paper beats Rock"
        }
      }
/*
      function playGame(){
      
        let player = 0
        let computer = 0
        let winner

        for(let i = 0; i = 1; ){
      
         winner = playRound() 
         console.log(winner)

         if (winner == "Draw"){
            
          }
         else if (winner == "You Win! Rock beats Scissors" || winner ==  "You Win! Scissors beats Paper" || winner == "You Win! Paper beats Rock" ){
            player += 1 
         }
         else if (winner == "You Lose! Rock beats Scissors" || winner == "You Lose! Scissors beats Paper" || winner == "You Lose! Paper beats Rock"){
          computer += 1
         }
         console.log("Score = Player: " + player + " Computer: " + computer  )
        
         ///Ends the cycle when one of the players reaches 3 points 
         if(player == 3 || computer == 3){
          break
         }
        }

        /// Final Winner
        if (player > computer){
          return console.log("You Won! " + player + " : " + computer)
         } 
         else{
          return console.log("You Lost! " + player + " : " + computer)
          }
      }
*/