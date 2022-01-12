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
        currentGameResult.textContent = "Its a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("you lost!");
        currentGameResult.textContent = "You lost!";
        computerScore++;
        computerCurrentScore.textContent = computerScore;
        
        
    }
    else if (playerSelection == "rock" && computerSelection =="siccors") {
        console.log("you won!");
        currentGameResult.textContent = "You won!";
        playerScore++;
        playerCurrentScore.textContent = playerScore;
    }
    finalResult();
    resetGame();
    console.log("Player Score:", playerScore, "Computer Score:",  computerScore);
}
    

function playerPlayPaper (computerSelection,playerSelection) {  

    computerSelection = computerPlay();
    playerSelection = playerChoicePaper;



    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win!");
        currentGameResult.textContent = "You won!";
        playerScore++;
        playerCurrentScore.textContent = playerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        console.log("Its a tie!");
        currentGameResult.textContent = "Its a tie!";
        
    }
    else if (playerSelection == "paper" && computerSelection =="siccors") {
        console.log("You lost!");
        currentGameResult.textContent = "You lost!";
        computerScore++;
        computerCurrentScore.textContent = computerScore;
        
    }
    
    console.log("Player Score:", playerScore, "Computer Score:",  computerScore);
}

function playerPlaySiccors (computerSelection,playerSelection) {  

    computerSelection = computerPlay();
    playerSelection = playerChoiceSiccors;



    if (playerSelection == "siccors" && computerSelection == "rock") {
        console.log("You lost!");
        currentGameResult.textContent = "You lost!";
        computerScore++;
        computerCurrentScore.textContent = computerScore;
    }
    else if (playerSelection == "siccors" && computerSelection == "paper"){
        console.log("You win!");
        currentGameResult.textContent = "You won!";
        playerScore++;
        playerCurrentScore.textContent = playerScore;
    }
    else if (playerSelection == "siccors" && computerSelection =="siccors") {
        console.log("Its a tie!");
        currentGameResult.textContent = "Its a tie!";

        
        
    }
    
    console.log("Player Score:", playerScore, "Computer Score:",  computerScore);
}

function finalResult() {
    if (playerScore == 5){
        finalGameResult.textContent = "YOU WIN!!!";
    }
    else if (computerScore == 5) {
        finalGameResult.textContent = "YOU LOST!!!";
    }
    else if (computerScore == 5 && playerScore ==5){
        finalGameResult.textContent = "ITS A TIE!!!";
    }
}

function resetGame () {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        playerCurrentScore.textContent = playerScore;
        computerCurrentScore.textContent = computerScore;
        currentGameResult.textContent = "";
    }     
    else{
        finalGameResult.textContent = "";

    }
}


const playerCurrentScore = document.querySelector('.player-score');
const computerCurrentScore = document.querySelector('.computer-score');


const currentGameResult = document.querySelector('.current-result');
const finalGameResult = document.querySelector('.final-result');








