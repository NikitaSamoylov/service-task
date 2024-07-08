import { initializeClock } from './timer';

const dailySessionTimer = document.querySelector('.timer__count--daily-session');
const terminalTimer = document.querySelector('.timer__count--terminal');
const newsTimer = document.querySelector('.timer__count--news');
const groupTimer = document.querySelector('.timer__count--group');
const daily60Timer = document.querySelector('.timer__count--daily60');

const dailySessionDeadline = '2024-07-29';
const terminalDeadline = '2024-08-02';
const newsDeadline = '2024-07-22';
const groupDeadline = '2024-07-21';
const daily60Deadline = '2024-07-19';

document.addEventListener('DOMContentLoaded', () => {
  initializeClock(dailySessionTimer, dailySessionDeadline);
  initializeClock(terminalTimer, terminalDeadline);
  initializeClock(newsTimer, newsDeadline);
  initializeClock(groupTimer, groupDeadline);
  initializeClock(daily60Timer, daily60Deadline);
});
