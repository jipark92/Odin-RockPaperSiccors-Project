


        //function to call random hand sign from computer player
        function computerPlay() {
            randomComputerChoice = Math.floor(Math.random() * 3) + 1; // numbers 1-3 represents rock,paper,siccor.
            if (randomComputerChoice == "1") {
                return "rock";
            }
            else if (randomComputerChoice == "2") {
                return "paper"
            }
            else { 
                return "siccor"
            }
        }
        
        //function to get players hand sign.
        function playerPlay() {
            //asks what the player what hand they want to play.
            let playerChoice = prompt("what hand would you like to play");

            //this makes any capitalization to lowercase
            playerChoice = playerChoice.toLowerCase();

            //these are the decisions.
            if (playerChoice == "rock") {
                return "rock"
            } 
            else if (playerChoice == "paper") {
                return "paper"
            }
            else if (playerChoice == "siccor") {
                return "siccor"
            }
            else {
                return "Invalid hand, please type rock,paper,siccor"
            }
        }

        

        //Function to play a round of rock paper siccors.
        function playRound (playerSelection, computerSelection) {


            

            // computer and player hand choice
            computerSelection = computerPlay();
            playerSelection = playerPlay();

            //TIE
            if (playerSelection == "rock" && computerSelection == "rock") {
                tieRounds++;
                console.log( "ITS A TIE!!");
            }
            else if (playerSelection == "paper" && computerSelection == "paper") {
                tieRounds++;
                console.log( "ITS A TIE!!");
            }
            else if (playerSelection == "siccor" && computerSelection == "siccor") {
                tieRounds++;
                console.log( "ITS A TIE!!");
            }
            

            //WIN
            else if ( playerSelection == "rock" && computerSelection == "siccor"){
                playerScore++;
                console.log( "YOU WON! Rock beats siccor!");
                
                
            }
            else if ( playerSelection == "paper" && computerSelection == "rock"){
                playerScore++;
                console.log( "YOU WON! Paper beats rock!");
                
            }
            else if ( playerSelection == "siccor" && computerSelection == "paper"){
                playerScore++;
                console.log( "YOU WON! Siccor beats Rock!");
                
            }

            //LOSE
            else if ( playerSelection == "siccor" && computerSelection == "rock"){
                compScore++;
                console.log( "YOU LOST! Siccor is weaker than rock!");
                
            }
            else if ( playerSelection == "rock" && computerSelection == "paper"){
                compScore++;
                console.log( "YOU LOST! Rock is weaker than paper!");
                
            }
            else if ( playerSelection == "paper" && computerSelection == "siccor"){
                compScore++;
                console.log( "YOU LOST! Paper is weaker than siccor!");
                
                
            }
            else {
                console.log("Type in the correct hand sign: Rock, Paper, or Siccor");
            }
        }



        // this variables sets the initial value of scores 
        let compScore = 0;
        let playerScore = 0;
        let tieRounds = 0;
        
        //Function to run the game 5 times and tracks the score of player and computer.
        function game(){

            for (let i=0; i < 5; i++) { //this loops around 5 times for the game.
                playRound();      
            }

            // this displays the total point
            console.log(compScore);
            console.log(playerScore);
            console.log(tieRounds);

            // This compares the scores to determine the winner or call for a tie.
            // if computer score is more than player score then the result is YOU LOST
            if (compScore > playerScore){
                console.log("Computer WINS! YOU LOST!")
            }
            
            // if computer score is less than player score then the result is YOU WON
            else if ( compScore < playerScore)  {
                console.log("YOU WON! CONGRATS!")
            }
            // if computer score is the same as the player score then the result is a TIE
            else if (compScore == playerScore) {
                console.log("ITS A TIE!")
            }
            // if there is any error it will tell you to try again
            else {
                console.log("TRY AGAIN!")
            }
            
            
        }