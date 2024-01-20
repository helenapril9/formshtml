import Widget from './widget';

const widget = new Widget();

const container = document.querySelector('.container');
const btn = document.querySelector('[toggle="popover"]');
container.insertAdjacentHTML('afterbegin', widget.div);

btn.addEventListener('click', (e) => {
  const popover = container.querySelector('[widget="popover-top"]');
  popover.classList.toggle('invisible');
  popover.classList.toggle('active');
});