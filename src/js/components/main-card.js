import { initializeClock } from './timer';

const packageBasicTimer = document.querySelector('.timer__count--basic');
const packageProTimer = document.querySelector('.timer__count--pro');
const packageSilverTimer = document.querySelector('.timer__count--silver');
const packageGoldTimer = document.querySelector('.timer__count--gold');

const basicTimerDeadline = '2024-07-25';
const proTimerDeadline = '2024-07-26';
const silverTimerDeadline = '2024-07-27';
const GoldTimerDeadline = '2024-07-29';

document.addEventListener('DOMContentLoaded', () => {
  initializeClock(packageBasicTimer, basicTimerDeadline);
  initializeClock(packageProTimer, proTimerDeadline);
  initializeClock(packageSilverTimer, silverTimerDeadline);
  initializeClock(packageGoldTimer, GoldTimerDeadline);
});





