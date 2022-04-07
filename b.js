let cardArray = [];
let message = " ";
let sum = 0;
let alive = true;
let blackjack = false;

console.log(cardArray);

let pWanna = document.getElementById("p-Wanna");
let pSum = document.getElementById("p-Sum");
let pCard = document.getElementById("p-Card");

//declaring object
let player = {
  name: "subham",
  chips: 100,
};

let playerName = document.getElementById("player-Name");
playerName.textContent = player.name + ": $" + player.chips;

function randomCard() {
  // return Math.floor(Math.random()*13+1)

  let randomNo = Math.floor(Math.random() * 13 + 1);
  if (randomNo > 10) {
    return 10;
  } else if (randomNo === 1) {
    return 11;
  } else return randomNo;
}

function startGame() {
  let a = randomCard();
  let b = randomCard();
  cardArray = [a, b];
  sum = a + b;
  game();
}

function game() {
  pCard.textContent = "your cards: ";

  for (let i = 0; i < cardArray.length; i++) {
    pCard.textContent += cardArray[i] + " ";
  }

  if (sum < 21) {
    message = "wanna draw new card?";
    alive = true;
  } else if (sum === 21) {
    message = "you win !!";
    blackjack = true;
  } else {
    message = "you lose :(";
    alive = false;
  }

  pWanna.textContent = message;
  pSum.textContent = "your count: " + sum;
}

function newCard() {
  if (alive === true && blackjack === false) {
    let newC = randomCard();
    sum += newC;
    cardArray.push(newC);
    console.log(cardArray);
    game();
  } else {
    pWanna.textContent = "you're not allowed to draw new card";
  }
}
