import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '30%',
  position: 'center-center',
  fontSize: '15px',
  timeout: 2000,
  backOverlay: true,
});

import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');

const inputDataTime = document.querySelector('#datetime-picker');
const timer = document.querySelector('.timer');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const butonStart = document.querySelector('[data-start]');

timer.style.display = 'grid';
timer.style.gap = '20px';
timer.style.alignItems = 'centr';
timer.style.gridTemplateColumns = 'repeat(4, 300px)';
// timer.style.gridTemplateRows = 'repeat(3, 400px)';

butonStart.addEventListener('click', getButtonStart);

butonStart.setAttribute('disabled', false);

let delta;
let dataSelect;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  // minDate: 'today',
  minuteIncrement: 1,

  onClose(selectedDates) {
    dataSelect = selectedDates[0].getTime();
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.failure(
        'Please choose a date in the future \n Будь ласка, виберіть дату в майбутньому'
      );
      // return alert(
      //   'Please choose a date in the future \nБудь ласка, виберіть дату в майбутньому'
      // );
    } else {
      butonStart.removeAttribute('disabled');
      // console.log(selectedDates[0]);
    }
  },
};
function getButtonStart() {
  // console.log(delta);

  setInterval(() => {
    delta = dataSelect - Date.now();

    if (delta <= 1) {
      return clearInterval(setInterval);
    } else {
      convertMs(delta);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days

  const days = addLeadingZero(Math.floor(ms / day));

  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  dataDays.textContent = days;
  dataHours.textContent = hours;
  dataMinutes.textContent = minutes;
  dataSeconds.textContent = seconds;

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
flatpickr(inputDataTime, options);
