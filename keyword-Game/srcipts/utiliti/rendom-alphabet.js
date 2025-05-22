function getRendomAlphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz/";
  const randomAlphabet = alphabet.split("");
  const randomIndex = Math.floor(Math.random() * randomAlphabet.length);
  const randomLetter = randomAlphabet[randomIndex];
  return randomLetter;
}

function changeBackgroundColor(randomLetter) {
  const kdbBgChange = getId(randomLetter);
  kdbBgChange.classList.add("bg-orange-400");
}
