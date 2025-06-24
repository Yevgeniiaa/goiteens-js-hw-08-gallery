const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
let currentKeyIndex = 0;

const keyDisplay = document.getElementById("key");
const newGameButton = document.getElementById("new-game");

function updateKeyDisplay() {
  if (currentKeyIndex >= keys.length) {
    PNotify.success({
      text: "Гру завершено! Почнімо спочатку.",
      delay: 2000,
    });
    currentKeyIndex = 0;
  }
  keyDisplay.textContent = keys[currentKeyIndex];
}

function handleKeydown(event) {
  const pressedKey = event.key.toLowerCase();
  const expectedKey = keys[currentKeyIndex];

  if (pressedKey === expectedKey) {
    currentKeyIndex++;
    updateKeyDisplay();
    PNotify.success({
      text: `Правильно: ${pressedKey}`,
      delay: 1000,
    });
  } else {
    PNotify.error({
      text: `Помилка! Очікувалось: "${expectedKey}", натиснуто: "${pressedKey}"`,
      delay: 2000,
    });
  }
}

function preventDefaultBehavior(event) {
  event.preventDefault();
}

function startNewGame() {
  currentKeyIndex = 0;
  updateKeyDisplay();
  PNotify.info({
    text: "Нова гра розпочата!",
    delay: 1500,
  });
}

document.addEventListener("keydown", handleKeydown);
document.addEventListener("keypress", preventDefaultBehavior);
newGameButton.addEventListener("click", startNewGame);

updateKeyDisplay();

