function getComputerChoice() {
  const CHOICE = ['rock', 'paper', 'scissors']

  // Generate a random integer from 0 to 2
  let ranInt = Math.floor(Math.random() * 3)
  return CHOICE[ranInt]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('It is a tie.')
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You lose! Paper beats Rock.')
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You win! Rock beats Scissors.')
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You win! Paper beats rock.')
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You lose! Scissors beats paper.')
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You lose! Rock beats Scissors.')
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You win! Scissors beats paper.')
  }
}

// const playerSelection = 'rock'
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))

function game() {
  for (let i = 0; i < 5; i++) {
    // your code here!
    let playerSelection = prompt(
      'Please chooose from "Rock", "Paper" and "Scissors"'
    )
    let computerSelection = getComputerChoice()
    playRound(playerSelection.toLocaleLowerCase(), computerSelection)
  }
}

game()
