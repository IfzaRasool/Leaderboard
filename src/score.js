const ul = document.querySelector('.score-list');
const userName = document.querySelector('.name');
const gameScore = document.querySelector('.score');
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

// display score
const displayScore = (data) => {
  userName.value = '';
  gameScore.value = '';
  ul.innerHTML = '';
  data.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user}:  ${element.score}`;
    ul.appendChild(li);
  });
};

// fetch scores

export const getScores = async (id) => {
  await fetch(`${BASE_URL}/${id}/scores`)
    .then((res) => res.json())
    .then((data) => {
      displayScore(data.result);
    });
};

export const createScore = async (id) => {
  await fetch(`${BASE_URL}/${id}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: userName.value,
      score: gameScore.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((json) => json);
};