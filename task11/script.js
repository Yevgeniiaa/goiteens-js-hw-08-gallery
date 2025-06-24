console.clear()
const hourTimer = document.getElementById('hour-timer');
const hourWarning = document.getElementById('hour-warning');

let minutesLeft = 60;
const minuteInterval = setInterval(() => {
  minutesLeft--;
  const mins = String(minutesLeft).padStart(2, '0');
  hourTimer.textContent = `${mins}:00`;

  if (minutesLeft === 30) {
    hourWarning.classList.remove('hidden');
  }

  if (minutesLeft <= 0) {
    clearInterval(minuteInterval);
    hourTimer.textContent = '00:00';
  }
}, 60000); 

const msTimer = document.getElementById('ms-timer');
const animationBox = document.getElementById('animation-box');
const restartBtn = document.getElementById('start-btn');

function startMsTimer() {
  let timeLeft = 30000; 
  restartBtn.disabled = true;

  const msInterval = setInterval(() => {
    timeLeft -= 10;

    const seconds = Math.floor(timeLeft / 1000);
    const milliseconds = timeLeft % 1000;

    msTimer.textContent = `00:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;

    if (timeLeft <= 10000) {
      animationBox.classList.add('animate');
    }

    if (timeLeft <= 0) {
      clearInterval(msInterval);
      msTimer.textContent = '00:00.000';
      animationBox.classList.remove('animate');
      restartBtn.disabled = false;
    }
  }, 10); 
}

startMsTimer();

restartBtn.addEventListener('click', startMsTimer);
