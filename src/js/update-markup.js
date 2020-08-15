import countryTemplate from '../templates/country.hbs';
import refs from './refs.js';
import messageError from './pnotify-message';

function updateMarkup(data) {
  if (data.length > 10) {
    messageError();
  } else if (data.length === 1) {
    cleanMapkup();
    doCountryMapkup(data);
  } else {
    cleanMapkup();
    data.forEach(obj => doListCountries(obj.name));
  }
}
export default updateMarkup;

function doCountryMapkup(data) {
  let countryMapkup = countryTemplate(data);
  refs.boxCountry.insertAdjacentHTML('beforeend', countryMapkup);
}

function doListCountries(name) {
  refs.listCountries.innerHTML += `<li>${name}</li>`;
}

function cleanMapkup() {
  refs.listCountries.innerHTML = '';
  refs.boxCountry.innerHTML = '';
}
