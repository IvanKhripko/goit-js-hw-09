import '../css/common.css';

const bodyEl = document.body;
// console.log(bodyEl);

const btnStartEl = document.querySelector('button');
// console.log(btnStartEl);

const btnStopEl = btnStartEl.nextElementSibling;
// console.log(btnStopEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

btnStartEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();

    bodyEl.style.backgroundColor = color;

    btnStartEl.setAttribute('disabled', 'disabled');
    btnStopEl.removeAttribute('disabled');
  }, 1000);
});

btnStopEl.addEventListener('click', () => {
  clearInterval(timerId);
  btnStopEl.setAttribute('disabled', 'disabled');
  btnStartEl.removeAttribute('disabled');
});
