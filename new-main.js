playerScore = 0;
computerScore = 0;
gameRound = 0;

playerChoiceRock = "rock";
playerChoicePaper = "paper";
playerChoiceSiccors = "siccors";

const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonSiccors = document.querySelector('.siccors');
        
buttonRock.addEventListener('click', () => {
    playerPlayRock();
  });

buttonPaper.addEventListener('click', () => {
    playerPlayPaper();
});

buttonSiccors.addEventListener('click', () => {
    playerPlaySiccors();
});

//

function computerPlay() {
    randomComputerChoice = Math.floor(Math.random() * 3) + 1;

    if (randomComputerChoice == "1") {
        return "rock";
    }
    else if (randomComputerChoice == "2") {
        return "paper";
    }
    else { 
        return "siccors";
    }
}

function playerPlayRock (computerSelection,playerSelection) {  

    computerSelection = computerPlay();
    playerSelection = playerChoiceRock;



    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Its a tie!");
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("you lost!");
        computerScore++;
    }
    else if (playerSelection == "rock" && computerSelection =="siccors") {
        console.log("you won!");
        playerScore++;
    }
    
    console.log("Player Score:", playerScore, "Computer Score:",  computerScore);
}
    

function playerPlayPaper (computerSelection,playerSelection) {  

    computerSelection = computerPlay();
    playerSelection = playerChoicePaper;



    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win!");
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        console.log("Its a tie!");
        
    }
    else if (playerSelection == "paper" && computerSelection =="siccors") {
        console.log("You lost!");
        computerScore++;
        
    }
    
    console.log("Player Score:", playerScore, "Computer Score:",  computerScore);
}

function playerPlaySiccors (computerSelection,playerSelection) {  

    computerSelection = computerPlay();
    playerSelection = playerChoiceSiccors;



    if (playerSelection == "siccors" && computerSelection == "rock") {
        console.log("You lost!");
        computerScore++;
    }
    else if (playerSelection == "siccors" && computerSelection == "paper"){
        console.log("You win!");
        playerScore++;
    }
    else if (playerSelection == "siccors" && computerSelection =="siccors") {
        console.log("Its a tie!");
        
        
    }
    
    console.log("Player Score:", playerScore, "Computer Score:",  computerScore);
}











