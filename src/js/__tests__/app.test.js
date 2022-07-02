/**
 * @jest-environment jsdom
 */
import popoverAdd from '../dom';

test('click test', () => {
  document.body.innerHTML = `
    <form class="form">
        <button class="btn">Click to toggle popover</button>
    </form>`;
  const btn = document.querySelector('.btn');
  popoverAdd(btn);
  const checkClass = document.querySelector('.box');
  expect(checkClass).toBeTruthy();
});
