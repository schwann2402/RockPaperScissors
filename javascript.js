let computerScore = 0;
let playerScore = 0;
let roundWinner = '';
let winner = '';

function playRound(playerChoice, computerChoice) {
    if ((playerChoice == 'rock' &&  computerChoice == 'scissors') ||
   (playerChoice == 'scissors' && computerChoice == 'paper') ||
   (playerChoice == 'paper' && computerChoice == 'rock'))
   {playerScore++, roundWinner='player', winner ='player'}

   else if ((playerChoice == 'scissors' &&  computerChoice == 'rock') ||
    (playerChoice == 'paper' && computerChoice == 'scissors') ||
    (playerChoice == 'rock' && computerChoice == 'paper')) {
    computerScore++; roundWinner='computer', winner ='cpu'}
    
    else {
        roundWinner=`tie`, winner='tie'}
    updateScore(roundWinner,playerChoice,computerChoice);
    eachRoundResults(winner, playerChoice, computerChoice);
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
    }

function getComputerChoice() {
    let options = ['rock','paper','scissors'];
    return options[(Math.floor(Math.random() * 3))];
    }


const rockbtn = document.querySelector('.rock')
const paperbtn = document.querySelector('.paper')
const scissorsbtn = document.querySelector('.scissors')
const roundResult = document.querySelector('.description2')
const resultMessage = document.querySelector('.resultMessage')
const playerPara = document.querySelector('.yourScore')
const cpuPara = document.querySelector('.cpuScore')
const restartGame = document.querySelector('.modal')
const restartBtn = document.querySelector('.modalContent')
const gameWinner = document.querySelector('.winner')

rockbtn.addEventListener('click', () => handleClick('rock'))
paperbtn.addEventListener('click', () => handleClick('paper'))
scissorsbtn.addEventListener('click', () => handleClick('scissors'))
restartBtn.addEventListener('click', restartTheGame)

function handleClick(playerChoice) {
    console.log(handleClick)
    if (isGameOver()) {
        openGameOverModal()
        return;
    }
    const computerChoice = getComputerChoice()
    playRound(playerChoice, computerChoice)
    updateScore();
    eachRoundResults();

    if (isGameOver()) {
        openGameOverModal()
        showWinner()
    }}

function showWinner() {
    if (playerScore === 5) {
        gameWinner.textContent = `YOU WON!`
    } else if (computerScore === 5) {
        gameWinner.textContent = `YOU LOSE!`
    }}

function updateScore() {
    if (roundWinner == 'tie') {
        roundResult.textContent = `It's a tie!`;
    } else if (roundWinner == 'player') {
        roundResult.textContent = `You win!`
    } else if (roundWinner == 'computer') {
        roundResult.textContent = `You lose!`
    }

    playerPara.textContent = `Your score: ${playerScore}`; 
    cpuPara.textContent = `Opponent score: ${computerScore}`; 
}

function eachRoundResults (roundWinner, playerChoice, computerChoice) {
    if (roundWinner == 'player') {
        resultMessage.textContent = `${capitalizeFirstLetter(playerChoice)} beats ${computerChoice.toLowerCase()}`;
        return;}
    else if (winner == 'cpu') {
        resultMessage.textContent = `${capitalizeFirstLetter(computerChoice)} beats ${playerChoice.toLowerCase()}`;
        return;
    } else if (roundWinner == 'tie') {
        resultMessage.textContent = `${capitalizeFirstLetter(playerChoice)} ties ${computerChoice.toLowerCase()}`
    }}


function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
}

function openGameOverModal() {
    if (playerScore === 5){
        gameWinner.textContent = `YOU WON!`
    } else if (computerScore === 5) {
        gameWinner.textContent = `YOU LOSE`
    }
    restartGame.classList.add('modalShow');}

function restartTheGame() {
    playerScore = 0
    computerScore = 0
    roundResult.textContent = `Choose your weapon`;
    resultMessage.textContent =``;
    playerPara.textContent = `Your score: 0`;
    cpuPara.textContent = `Your opponent score: 0`;
    restartGame.classList.remove('modalShow');
}