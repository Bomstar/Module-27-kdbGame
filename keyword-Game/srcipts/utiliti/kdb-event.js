// Keyboard Event
function kdbEvent() {
  window.addEventListener("keyup", (event) => {
    const pressKey = event.key;
    const letter = getId("letter");
    console.log(pressKey, letter.innerText);
    if (pressKey === letter.innerText) {
      const kdbBgChange = getId(letter.innerText);
      kdbBgChange.classList.remove("bg-orange-400");
      const randomLetter = getRendomAlphabet();
      letter.innerText = randomLetter;
      changeBackgroundColor(randomLetter);
      getId("dollar").innerText++;
    } else {
      console.log("Wrong key pressed");
      getId("heart").innerText--;
      lifeCheck();
    }
  });
}

// Life Check
function lifeCheck() {
  const heartValue = getId("heart").innerText;
  if (heartValue <= 0) {
    const playGround = getId("play-ground");
    const gameOver = getId("game-over");
    playGround.classList.add("hidden");
    gameOver.classList.remove("hidden");
    getId("score").innerText = getId("dollar").innerText;
  }
}
