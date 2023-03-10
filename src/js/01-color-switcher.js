function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const butonChangeColor = document.querySelector('[data-start]');
console.log(butonChangeColor);
const butonStopColor = document.querySelector('[data-stop]');
const bodyChangeColor = document.querySelector('body');

butonChangeColor.addEventListener('click', () => {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  butonChangeColor.setAttribute('disabled', false);
  butonStopColor.removeAttribute('disabled');
});

butonStopColor.addEventListener('click', () => {
  butonStopColor.setAttribute('disabled', false);
  butonChangeColor.removeAttribute('disabled');
});
