import popoverAdd from './dom';

document.querySelector('.btn').addEventListener('click', (event) => {
  const pop = document.querySelector('.box');
  if (!pop) {
    popoverAdd(event.target);
  }
  event.preventDefault();
});

document.querySelector('.btn').addEventListener('blur', () => {
  const pop = document.querySelector('.box');
  if (pop) {
    pop.remove();
  }
});
