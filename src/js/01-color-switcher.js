function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const butonChangeColor = document.querySelector('[data-start]');
const butonStopColor = document.querySelector('[data-stop]');
const bodyChangeColor = document.querySelector('body');

butonStopColor.setAttribute('disabled', false);
let timerId = null;

butonChangeColor.addEventListener('click', () => {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  butonChangeColor.setAttribute('disabled', false);
  butonStopColor.removeAttribute('disabled');
  timerId = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

butonStopColor.addEventListener('click', () => {
  butonStopColor.setAttribute('disabled', false);
  butonChangeColor.removeAttribute('disabled');
  clearInterval(timerId);
});
