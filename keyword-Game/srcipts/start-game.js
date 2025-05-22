function startGame() {
  const HomeGround = getId("home-ground");
  const playGround = getId("play-ground");
  const heartValue = getId("heart");
  const dollarValue = getId("dollar");
  HomeGround.classList.add("hidden");
  playGround.classList.remove("hidden");
  heartValue.innerText = 5;
  dollarValue.innerText = 0;

  const randomLetter = getRendomAlphabet();
  const letter = getId("letter");
  letter.innerText = randomLetter;

  changeBackgroundColor(randomLetter);
  kdbEvent();
}

function playAgain() {
  const playGround = getId("play-ground");
  const gameOver = getId("game-over");
  playGround.classList.remove("hidden");
  gameOver.classList.add("hidden");
  const heartValue = getId("heart");
  const dollarValue = getId("dollar");
  heartValue.innerText = 5;
  dollarValue.innerText = 0;
}
