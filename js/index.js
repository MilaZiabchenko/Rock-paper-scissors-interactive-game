const scoreBoard = {
  player: 0,
  computer: 0
};

const score = document.querySelector('#score');
const result = document.querySelector('#result');
const modal = document.querySelector('#modal');
const reset = document.querySelector('#reset');
const choices = document.querySelectorAll('.choice');

const getComputerChoice = () => {
  const randomNumber = Math.random();

  if (randomNumber < 0.34) {
    return 'rock';
  } else if (randomNumber <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const getRoundWinner = (p, c) => {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    return c === 'paper' ? 'computer' : 'player';
  } else if (p === 'paper') {
    return c === 'scissors' ? 'computer' : 'player';
  } else if (p === 'scissors') {
    return c === 'rock' ? 'computer' : 'player';
  }
};

const showRoundWinner = (winner, computerChoice) => {
  if (scoreBoard.player < 3 && scoreBoard.computer < 3) {
    if (winner === 'player') {
      scoreBoard.player++;
      result.innerHTML = `
        <h2 class="text-win">You Win</h2>
        <img src="img/${computerChoice}.svg"/>
        <h3>Computer Chose <strong>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong></h3>
        `;
    } else if (winner === 'computer') {
      scoreBoard.computer++;
      result.innerHTML = `
        <h2 class="text-lose">You Lose</h2>
        <img src="img/${computerChoice}.svg"/>
        <h3>Computer Chose <strong>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong></h3>
        `;
    } else {
      result.innerHTML = `
        <h2>It's A Draw</h2>
        <img src="img/${computerChoice}.svg"/>
        <h3>Computer Chose <strong>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong></h3>
        `;
    }
  }

  score.innerHTML = `
        <p>Computer: ${scoreBoard.computer}</p>
        <p>You: ${scoreBoard.player}</p>
    `;
  modal.style.display = 'block';
};

const showGameWinner = () => {
  if (scoreBoard.computer === 3) {
    result.innerHTML = `
        <h1>Game is over!</h1>
        <p class="text-win">Computer is the winner!</p>
        `;
    reset.style.display = 'block';
  }

  if (scoreBoard.player === 3) {
    result.innerHTML = `
        <h1>Game is over!</h1>
        <p class="text-win">You are the winner!</p>
        `;
    reset.style.display = 'block';
  }
};

const play = e => {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getRoundWinner(playerChoice, computerChoice);

  showRoundWinner(winner, computerChoice);
  showGameWinner();
};

const clearModal = e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

const restartGame = () => {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  score.innerHTML = `
    <p>Computer: 0</p>
    <p>You: 0</p>
    `;
  reset.style.display = 'none';
};

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
reset.addEventListener('click', restartGame);
