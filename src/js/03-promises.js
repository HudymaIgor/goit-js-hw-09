import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const createBtn = document.querySelector('button')


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) =>{
  setTimeout(() => {
  
  if (shouldResolve) {
    resolve({ position, delay })
  } else {
     reject({ position, delay })
  }
}, delay);
});
}
formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  // console.log('sdgdfh')
  let finalDelay = Number(formEl.delay.value);
  const step = Number(formEl.step.value);

  for (let i = 1; i <= Number(formEl.amount.value); i += 1){

    createPromise(i, finalDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    finalDelay += step;
  }
})
