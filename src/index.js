import './style.css';

import { getScores, createScore } from './score.js';

const refreshBtn = document.querySelector('.refresh-btn');
const addBtn = document.querySelector('.add-btn');

const GAME_ID = 'XcuVO085fpD8iKwa8mav';

getScores(GAME_ID);

window.addEventListener('load', () => {
  refreshBtn.addEventListener('click', () => getScores(GAME_ID));
  addBtn.addEventListener('click', () => createScore(GAME_ID));
});
