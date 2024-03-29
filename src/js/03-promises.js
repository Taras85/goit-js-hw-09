import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '30%',
  position: 'center-center',
  fontSize: '15px',
  timeout: 5000,
  backOverlay: true,
});

const formSubmit = document.querySelector('.form');
const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');

inputDelay.setAttribute('step', 500);
inputDelay.setAttribute('min', 0);
inputStep.setAttribute('step', 500);
inputStep.setAttribute('min', 0);
inputAmount.setAttribute('value', 1);
inputAmount.setAttribute('min', 1);

formSubmit.style.display = 'grid';
formSubmit.style.gap = '20px';
formSubmit.style.gridTemplateColumns = 'repeat(auto-fill, 170px)';
formSubmit.style.alignItems = 'end';

formSubmit.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = Number(event.currentTarget[0].value);
  let step = Number(event.currentTarget[1].value);
  let amount = Number(event.currentTarget[2].value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms  `
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms  `);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms `
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms `);
      });

    delay += step;
  }
  formSubmit.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
