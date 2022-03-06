const playerCurrentScore = document.querySelector('.player-score');
const computerCurrentScore = document.querySelector('.computer-score');
const currentGameResult = document.querySelector('.current-result');
const finalGameResult = document.querySelector('.final-result');

const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonSiccors = document.querySelector('.siccors');

const playerText = document.querySelector('.player-choice')
const computerText = document.querySelector('.computer-choice')

playerScore = 0;
computerScore = 0;
playerChoiceRock = "rock";
playerChoicePaper = "paper";
playerChoiceSiccors = "siccors";
        
buttonRock.addEventListener('click', () => {
    playerPlayRock();
  });

buttonPaper.addEventListener('click', () => {
    playerPlayPaper();
});

buttonSiccors.addEventListener('click', () => {
    playerPlaySiccors();
});

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
};


function computerChoiceText(){
    if (computerSelection === "rock"){
        computerText.textContent = "Computer chose: rock"
    } 
}





function playerPlayRock (computerSelection,playerSelection) {  

    computerSelection = computerPlay();
    playerSelection = playerChoiceRock;

    playerChoseRockText()

    function computerChoiceText(){
        if (computerSelection === "rock"){
            computerText.textContent = "Computer chose: Rock";
        } else if (computerSelection === "paper"){
            computerText.textContent = "Computer chose: Paper";
        } else if (computerSelection === "siccors"){
            computerText.textContent = "Computer chose: Siccors"
        }
    }
    computerChoiceText()

    if (playerSelection == "rock" && computerSelection == "rock") {
        
        currentGameResult.textContent = "Its a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        
        currentGameResult.textContent = "You lost!";
        computerScore++;
        computerCurrentScore.textContent = computerScore;
        
        
    }
    else if (playerSelection == "rock" && computerSelection =="siccors") {
        
        currentGameResult.textContent = "You won!";
        playerScore++;
        playerCurrentScore.textContent = playerScore;
    }
    finalResult();
    resetGame(); 
};
    

function playerPlayPaper (computerSelection,playerSelection) {  
    computerSelection = computerPlay();
    playerSelection = playerChoicePaper;

    playerChosePaperText()

    function computerChoiceText(){
        if (computerSelection === "rock"){
            computerText.textContent = "Computer chose: Rock";
        } else if (computerSelection === "paper"){
            computerText.textContent = "Computer chose: Paper";
        } else if (computerSelection === "siccors"){
            computerText.textContent = "Computer chose: Siccors"
        }
    }
    computerChoiceText()

    if (playerSelection == "paper" && computerSelection == "rock") {
        
        currentGameResult.textContent = "You won!";
        playerScore++;
        playerCurrentScore.textContent = playerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        
        currentGameResult.textContent = "Its a tie!";
    }
    else if (playerSelection == "paper" && computerSelection =="siccors") {
        
        currentGameResult.textContent = "You lost!";
        computerScore++;
        computerCurrentScore.textContent = computerScore;
    }
    finalResult();
    resetGame(); 
};

function playerPlaySiccors (computerSelection,playerSelection) {  

    computerSelection = computerPlay();
    playerSelection = playerChoiceSiccors;

    playerChoseSiccorText()

    function computerChoiceText(){
        if (computerSelection === "rock"){
            computerText.textContent = "Computer chose: Rock";
        } else if (computerSelection === "paper"){
            computerText.textContent = "Computer chose: Paper";
        } else if (computerSelection === "siccors"){
            computerText.textContent = "Computer chose: Siccors"
        }
    }
    computerChoiceText()

    if (playerSelection == "siccors" && computerSelection == "rock") {
        currentGameResult.textContent = "You lost!";
        computerScore++;
        computerCurrentScore.textContent = computerScore;
    }
    else if (playerSelection == "siccors" && computerSelection == "paper"){
        
        currentGameResult.textContent = "You won!";
        playerScore++;
        playerCurrentScore.textContent = playerScore;
    }
    else if (playerSelection == "siccors" && computerSelection =="siccors") {
        
        currentGameResult.textContent = "Its a tie!";
    }
    finalResult();
    resetGame();
};

function finalResult() {
    if (playerScore === 5){
        finalGameResult.textContent = "YOU WON!!! CONGRATS!!!";
    }
    else if (computerScore === 5) {
        finalGameResult.textContent = "YOU LOST TO COMPUTER!";
    }
    else if (computerScore === 5 && playerScore === 5){
        finalGameResult.textContent = "ITS A TIE!!!";
    }
};

function resetGame () {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        playerCurrentScore.textContent = playerScore;
        computerCurrentScore.textContent = computerScore;
        currentGameResult.textContent = "";
    }     
    else{
        finalGameResult.textContent = "";
    }
};


function playerChoseSiccorText(){
    if (playerChoiceSiccors){
        playerText.textContent = "Player Chose: Siccors"
    } 
}

function playerChosePaperText(){
    if (playerChoicePaper){
        playerText.textContent = "Player Chose: Paper"
    } 
}

function playerChoseRockText(){
    if (playerChoiceRock){
        playerText.textContent = "Player Chose: Rock"
    } 
}


