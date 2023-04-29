const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const timeBlock = document.getElementById('timeBlock');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(countDownTime, 1000);

    function countDownTime() {
      const h = Math.floor(seconds / 60 / 60);
      const m = Math.floor(seconds / 60) % 60;
      const s = Math.ceil(seconds) % 60;

      timeBlock.innerHTML = `${h}:${m < 10 ? '0' + m : m}:${
        s < 10 ? '0' + s : s
      }`;

      seconds--;

      if (seconds < 0) {
        clearInterval(timer);
        buttonEl.disabled = false;
        inputEl.disabled = false;
        timeBlock.innerHTML = 'The time over';
      }
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  for (let i = 0; i < e.target.value.length; i++) {
    if (isNaN(e.target.value[i])) {
      e.target.value = e.target.value.replace(e.target.value[i], '');
    }
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  if (seconds) {
    buttonEl.disabled = true;
    inputEl.disabled = true;
    animateTimer(seconds);
  }

  inputEl.value = '';
});
