const play = e => {
	const playerChoice = e.target.id;
	const computerChoice = getComputerChoice();
	const winner = getWinner(playerChoice, computerChoice);
	showWinner(winner, computerChoice);
	showGameWinner();
};

const getComputerChoice = () => {
	const rand = Math.random();
	if (rand < 0.34) {
		return 'rock';
	} else if (rand <= 0.67) {
		return 'paper';
	} else {
		return 'scissors';
	}
};

const getWinner = (p, c) => {
	if (p === c) {
		return 'draw';
	} else if (p === 'rock') {
		if (c === 'paper') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if (p === 'paper') {
		if (c === 'scissors') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if (p === 'scissors') {
		if (c === 'rock') {
			return 'computer';
		} else {
			return 'player';
		}
	}
};

const showWinner = (winner, computerChoice) => {
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

const restartGame = () => {
	scoreBoard.player = 0;
	scoreBoard.computer = 0;
	score.innerHTML = `
    <p>Computer: 0</p>
    <p>You: 0</p>
    `;
	reset.style.display = 'none';
};

const clearModal = e => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
};
