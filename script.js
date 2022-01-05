let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

const compareGuesses = (user, computer, target) => {
    const humanDifference = Math.absO(target - human);
    const computerDifference = Math.abs(target - computer);
    return humanDifference <= computerDifference;
    
}

const updateScore = (winner) => {
    if(human === winner) {
        humanScore++
    } else if (compter === winner) {
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++
}