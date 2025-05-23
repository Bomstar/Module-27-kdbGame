function getRendomAlphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz/";
  const randomAlphabet = alphabet.split("");
  const randomIndex = Math.floor(Math.random() * randomAlphabet.length);
  const randomLetter = randomAlphabet[randomIndex];
  changeBackgroundColor(randomLetter);
  return randomLetter;
}

function changeBackgroundColor(randomLetter) {
  const kdbBgChange = getId(randomLetter);
  kdbBgChange.classList.add("bg-orange-400");
}

// function to remove the background color
function removeBackgroundColor(randomLetter) {
  const kdbBgChange = getId(randomLetter);
  kdbBgChange.classList.remove("bg-orange-400");
  return kdbBgChange;
}
