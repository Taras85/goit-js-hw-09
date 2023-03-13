const buttonSubmit = document.querySelector('.form  ');

buttonSubmit.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let delay = Number(event.currentTarget[0].value);
  let step = Number(event.currentTarget[1].value);
  let amount = Number(event.currentTarget[2].value);

  console.log(delay, step, amount);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay);

    console.log(delay, position);

    delay += step;
  }
}

function createPromise(position, delay) {
  let qw = Math.random();
  const shouldResolve = qw > 0.3;
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
  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms  ${qw}`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms ${qw}`);
    });
}
