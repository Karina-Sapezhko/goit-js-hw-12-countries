import debounce from 'lodash.debounce';
import refs from './refs.js';
import fetchCoutries from './fetch-countries.js';
import updateMarkup from './update-markup';

refs.input.addEventListener(
  'input',
  debounce(event => {
    fetchCoutries(event.target.value).then(data => updateMarkup(data));
  }, 400),
);
