    
     function getComputerChoise(){
        let rand = Math.floor(Math.random() * 3) + 1 ;
        switch (rand){
            case 1:
             return "rock";
            case 2:
             return "paper"
            case 3:
             return "scissors"
         }        
     }   

     function playRound(){

       let playerSelection = prompt("Rock, Paper or Scissors?");
       /* Make sure that the prompt it's correct */
       for (let i = 0; i = 1;){
         if (playerSelection == "paper" || playerSelection == "rock" || playerSelection == "scissors"){
            break
         }
         else{
            alert("Invalid Choice")
            playerSelection = prompt("Rock, Paper or Scissors?")
         }
       }
        /* Check the winner*/
        let computerSelection = getComputerChoise();
        
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
        
         if(player == 3 || computer == 3){
          break
         }
        }

        /* Final Winner*/

        if (player > computer){
          return console.log("You Won! " + player + " : " + computer)
         } 
         else{
          return console.log("You Lost! " + player + " : " + computer)
          }
      }
