// sstart the game and show the letter in display
function startGame() {
  hideCurrentPage("home-ground");
  showActualPage("play-ground");
  getId("letter").innerText = getRendomAlphabet();
}

// keyboard event and check the letter

document.addEventListener("keyup", (event) => {
  const key = event.key;
  if (key === "Enter") {
    startGame();
    return;
  }

  const kbdRects = getId("play-ground").classList.contains("hidden");
  if (kbdRects) {
    console.log("Please play now Button or Enter key");
    return;
  }

  const letter = getId("letter").innerText;
  if (key === letter) {
    removeBackgroundColor(letter);
    getId("letter").innerText = getRendomAlphabet();
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
