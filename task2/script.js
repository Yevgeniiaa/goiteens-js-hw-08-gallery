// Завдання 1
const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

const resizeImage = _.debounce((value) => {
  const scale = value / 50;
  image.style.transform = `scale(${scale})`;
}, 100);

slider.addEventListener('input', (e) => {
  resizeImage(e.target.value);
});

// Завдання 2
const box = document.getElementById('box');

const moveBox = _.debounce((x, y) => {
  box.style.transform = `translate(${x}px, ${y}px)`;
}, 100);

document.addEventListener('mousemove', (e) => {
  moveBox(e.clientX, e.clientY);
});