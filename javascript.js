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

function playerSelection(user) {
  let computer = computerChoice();
  let newUser = user.toLowerCase();
  let score;
  let win;
  let lose;
  let tie;

  if (computer == "rock" && newUser == "rock") {
    tie += 1;
    return "tie";
  } else if (computer == "rock" && newUser == "paper") {
    win += 1;
    return "win";
  } else if (computer == "rock" && newUser == "scissors"){
    lose += 1;
    return "lose";
  } else if (computer == "paper" && newUser == "rock") {
    lose += 1;
    return "lose";
  } else if (computer == "paper" && newUser == "paper") {
    tie += 1;
    return "tie";
  } else if (computer == "paper" && newUser == "scissors") {
    win += 1;
    return "win";
  } else if (computer == "scissors" && newUser == "rock") {
    lose += 1;
    return "win";
  } else if (computer == "scissors" && newUser == "paper") {
    tie += 1;
    return "lose";
  } else if (computer == "scissors" && newUser == "scissors") {
    win += 1;
    return "tie";
  } 
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

console.log(rock.textContent);

// rock.addEventListener("click", () => {

// });  

