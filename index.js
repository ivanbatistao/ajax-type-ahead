import { findMatches } from './utils/index.js';

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const data = [];

fetch(endpoint)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    data.push(...json);
  });

const searchInput = document.querySelector('.search');
const cardsContainer = document.querySelector('.results-container');
const initialLiElemtns = `<li class="result">Filter for a city</li>
      <li class="result">Or a state</li>`;

const displayMatches = (event) => {
  event.preventDefault();
  const inputValue = event.target.value;

  if (inputValue.length === 0) {
    cardsContainer.innerHTML = initialLiElemtns;
    return;
  }

  const matches = findMatches(inputValue, data);
  console.log(matches);

  const liElements = matches.map((match) => {
    return `<li class="result">${match.city}, ${match.state}</li>`;
  });

  console.log('liElements', liElements);

  if (liElements.length === 0) {
    cardsContainer.innerHTML = `<li class="result">No results found for this search</li>`;
    return;
  }

  cardsContainer.innerHTML = liElements.join('');
};

searchInput.addEventListener('keyup', displayMatches);
