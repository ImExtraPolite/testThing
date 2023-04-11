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

  if (computer == "rock" && newUser == "rock") {
    return "tie";
  } else if (computer == "rock" && newUser == "paper") {
    return "win";
  } else if (computer == "rock" && newUser == "scissors"){
    return "lose";
  } else if (computer == "paper" && newUser == "rock") {
    return "lose";
  } else if (computer == "paper" && newUser == "paper") {
    return "tie";
  } else if (computer == "paper" && newUser == "scissors") {
    return "win";
  } else if (computer == "scissors" && newUser == "rock") {
    return "win";
  } else if (computer == "scissors" && newUser == "paper") {
    return "lose";
  } else if (computer == "scissors" && newUser == "scissors") {
    return "tie";
  } 
}

let wScore = 0;
let lScore = 0;
let tScore = 0; 
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const tie = document.querySelector(".tie");

rock.addEventListener("click", () => {
  if (wScore < 5 && lScore < 5 && tScore < 5) {
    if (playerSelection(rock.textContent) == "win") {
      wScore +=1;
      win.textContent = wScore;
    } else if (playerSelection(rock.textContent) == "lose"){
      lScore +=1;
      lose.textContent = lScore;
    } else {
      tScore +=1;
      tie.textContent = tScore;
    }
  }

});  

paper.addEventListener("click", () => {
  if (wScore < 5 && lScore < 5 && tScore < 5) {
    if (playerSelection(paper.textContent) == "win") {
      wScore +=1;
      win.textContent = wScore;
    } else if (playerSelection(paper.textContent) == "lose"){
      lScore +=1;
      lose.textContent = lScore;
    } else {
      tScore +=1;
      tie.textContent = tScore;
    }
  }

});  

scissors.addEventListener("click", () => {
  if (wScore < 5 && lScore < 5 && tScore < 5) {
    if (playerSelection(scissors.textContent) == "win") {
      wScore +=1;
      win.textContent = wScore;
    } else if (playerSelection(scissors.textContent) == "lose"){
      lScore +=1;
      lose.textContent = lScore;
    } else {
      tScore +=1;
      tie.textContent = tScore;
    }

    if (wScore == 5) {
      console.log("you win");
    } else if (lScore == 5) {
      console.log("you lose");
    } else if (tScore == 5) {
      console.log("tie");
    }
  }
});  



