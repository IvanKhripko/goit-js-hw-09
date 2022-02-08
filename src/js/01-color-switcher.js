import '../css/common.css';

const bodyEl = document.body;

const buttonsEL = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const { btnStart, btnStop } = buttonsEL;
btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();

    bodyEl.style.backgroundColor = color;

    btnStart.setAttribute('disabled', 'disabled');
    btnStop.removeAttribute('disabled');
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStop.setAttribute('disabled', 'disabled');
  btnStart.removeAttribute('disabled');
});
