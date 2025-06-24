// Завдання 1 
let count = 0;
const logDiv = document.getElementById('interval-log');
const intervalId = setInterval(() => {
  count++;
  logDiv.innerHTML += `Повідомлення ${count}<br>`;
  if (count === 5) clearInterval(intervalId);
}, 1000);

// Завдання 2
const box = document.getElementById('box');
let pos = 0;
const animation = setInterval(() => {
  pos += 5;
  box.style.left = pos + 'px';
  box.style.width = 50 + pos / 5 + 'px';
  if (pos >= 200) clearInterval(animation);
}, 100);

// Завдання 3 
const gameBox = document.getElementById('game-box');
const scoreEl = document.getElementById('score');
let score = 0;

function moveBox() {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  gameBox.style.left = x + 'px';
  gameBox.style.top = y + 'px';
}

gameBox.addEventListener('click', () => {
  score++;
  scoreEl.textContent = score;
});

const gameInterval = setInterval(() => {
  moveBox();
}, 800);

setTimeout(() => {
  clearInterval(gameInterval);
  alert(`Час вийшов! Ваш результат: ${score}`);
  gameBox.remove();
}, 10000); 

// Завдання 4 
const input = document.getElementById('seconds');
const button = document.getElementById('start-timer');
const message = document.getElementById('timer-message');

button.addEventListener('click', () => {
  const seconds = parseInt(input.value);
  if (isNaN(seconds) || seconds <= 0) {
    alert('Введіть коректне число секунд');
    return;
  }

  message.textContent = `Очікуємо ${seconds} секунд...`;

  setTimeout(() => {
    message.textContent = `Час вийшов!`;
  }, seconds * 1000);
});
