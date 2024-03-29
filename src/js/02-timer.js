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
const field = document.querySelectorAll('.field');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const butonStart = document.querySelector('[data-start]');

timer.style.display = 'grid';
timer.style.gap = '20px';
timer.style.alignItems = 'centr';
timer.style.gridTemplateColumns = 'repeat(4, 70px)';
timer.style.paddingTop = '20px';
timer.style.fontSize = '20px';

field.forEach(element => {
  element.style.display = 'grid';
  element.style.justifyItems = 'center';

  // console.log(element);
});

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
    } else {
      butonStart.removeAttribute('disabled');
      // console.log(selectedDates[0]);
    }
  },
};
function getButtonStart() {
  // console.log(delta);
  butonStart.setAttribute('disabled', false);
  const IntId = setInterval(() => {
    delta = dataSelect - Date.now();
    if (delta <= 10000) {
      dataSeconds.style.color = 'tomato';
    }
    if (delta <= 1) {
      butonStart.removeAttribute('disabled');
      Notiflix.Report.success(
        'OFF',
        'Відлік закінчився! Вибиріть новий відлік!',
        'OK'
      );
      dataSeconds.style.color = 'inherit';
      return clearInterval(IntId);
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
