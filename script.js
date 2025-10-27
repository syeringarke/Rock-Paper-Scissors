const buttons = document.querySelectorAll('.buttons button');
const score = document.getElementById('result');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

const restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', restartGame);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id, computerChoice());
    });
});

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerPick, computerPick) {
    if (playerPick === computerPick) {
        result.TextContent = `It/s a tie! You both chose ${playerPick}.`;

    } else if (
    (playerPick === 'rock' && computerPick === 'scissors') ||
    (playerPick === 'paper' && computerPick === 'rock') ||
    (playerPick === 'scissors' && computerPick === 'paper'))
     {
        result.textContent = `You win! You chose ${playerPick}.`;
        playerScore++;
        playerScoreText.textContent = playerScore;

    } else {
        result.textContent = `You lose! Computer chose ${computerPick}.`;
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    result.textContent = 'The game restarted.';
}
