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

// const createGame = async () => {
//   await fetch(
//     'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'league_of_legends',
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     }
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };
