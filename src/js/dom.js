export default function popoverAdd(event) {
  event.insertAdjacentHTML('beforebegin', `
    <div class="box">
      <h3 class="title">Popover title</h3>
      <p class="text">
        And here's some amazing content. It's very engaging. Right?
      </p>
    </div>
    `);
  const pop = document.querySelector('.box');
  pop.style.top = `${event.offsetTop - (pop.offsetHeight + (event.offsetHeight / 2))}px`;
  pop.style.left = `${event.offsetLeft + event.offsetWidth / 2 - pop.offsetWidth / 2}px`;
}
