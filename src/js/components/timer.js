export function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 60000) % 60);
  const hours = Math.floor((t / (3600000)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

export function initializeClock(mainPackagesTitle, endtime) {

  function updateClock() {
    const t = getTimeRemaining(endtime);

    const daysSpan = document.createElement('div')
    daysSpan.textContent = t.days;
    const hoursSpan = document.createElement('div')
    hoursSpan.textContent = ('0' + t.hours).slice(-2)
    const minutesSpan = document.createElement('div')
    minutesSpan.textContent = ('0' + t.minutes).slice(-2)

    const timeinterval = setInterval(updateClock, 60000);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      daysSpan.innerHTML = '00';
      hoursSpan.innerHTML = '00';
      minutesSpan.textCoinnerHTMLntent = '00';
    };

    const timerWrapper = document.createElement('div');
    timerWrapper.innerHTML = `
      <span class="timer__item">
        ${ daysSpan.textContent }
      </span>
      <span class="timer__item">
         д
      </span>
      <span class="timer__item">
        ${ hoursSpan.textContent }
      </span>
      <span class="timer__item">
         ч
      </span>
      <span class="timer__item">
        ${ minutesSpan.textContent }
      </span>
      <span class="timer__item">
         м
      </span>
    `;

    mainPackagesTitle.replaceChildren(timerWrapper)
  };
  updateClock();
};

