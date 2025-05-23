function getId(id) {
  const idElement = document.getElementById(id);
  return idElement;
}
// optional
function getClass(className) {
  const classElement = document.getElementsByClassName(className);
  return classElement;
}

// show the current page
function showActualPage(idElement) {
  const actualPage = getId(idElement);
  actualPage.classList.remove("hidden");
}

// hide the current page
function hideCurrentPage(idElement) {
  const currentPage = getId(idElement);
  currentPage.classList.add("hidden");
}

// increase text value
function increaseValue(idElement) {
  const elementText = getId(idElement);
  const currentValue = parseInt(elementText.innerText);
  const newValue = currentValue + 1;
  elementText.innerText = newValue;
  return newValue;
}

// decrease text value
function decreaseValue(idElement) {
  const elementText = getId(idElement);
  const currentValue = parseInt(elementText.innerText);
  const newValue = currentValue - 1;
  elementText.innerText = newValue;
  return newValue;
}
