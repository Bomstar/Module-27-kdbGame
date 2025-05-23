const kbdRect = true;
let kbdRects = kbdRect;

// sstart the game and show the letter in display
function startGame() {
  hideCurrentPage("home-ground");
  showActualPage("play-ground");
  const randomAlphabet = getRendomAlphabet();
  getId("letter").innerText = randomAlphabet;
  kbdRects = getId("play-ground").classList.contains("hidden");
}

// keyboard event and check the letter

document.addEventListener("keyup", (event) => {
  if (kbdRects === true) {
    console.log("Please play now Button or Enter key");
    return;
  }
  const key = event.key;
  const letter = getId("letter").innerText;
  if (key === letter) {
    removeBackgroundColor(letter);
    const randomAlphabet = getRendomAlphabet();
    getId("letter").innerText = randomAlphabet;
    increaseValue("dollar");
  } else {
    const currentScore = decreaseValue("heart");
    if (currentScore <= 0) {
      gameOver(letter);
    }
  }
});

function gameOver(letter) {
  hideCurrentPage("play-ground");
  showActualPage("game-over");
  getId("score").innerText = getId("dollar").innerText;
  removeBackgroundColor(letter);
}

// restart the game
function restartGame() {
  hideCurrentPage("game-over");
  showActualPage("play-ground");
  getId("dollar").innerText = 0;
  getId("heart").innerText = 3;
  startGame();
}
