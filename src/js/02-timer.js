import '../css/common.css';
import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';

const startBtnEl = document.querySelector('button[data-start]');
startBtnEl.addEventListener('click', onStartBtnClick);

const inputEl = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= options.defaultDate) {
      alert('Please choose a date in the future');
      startBtnEl.setAttribute('disabled', 'disabled');
    } else {
      startBtnEl.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

function onStartBtnClick() {
  const date = new Date();
  console.log(typeof inputEl.value);
  // const timer = inputEl.value - date;
  // console.log(timer);
}
