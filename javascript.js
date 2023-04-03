function computerChoice() {
  let computer = Math.floor((Math.random() * 3) + 1);

  if (computer == 1) {
    return "rock";
  } else if (computer == 2){
    return "paper";
  } else {
    return "scissors";
  }
}

function playerSelection(computer, user) {
  let something = computer;

  return something + user;
}

let user = "rock";

console.log(playerSelection(computerChoice, user));

