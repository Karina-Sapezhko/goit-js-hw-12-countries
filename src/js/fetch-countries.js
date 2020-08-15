function fetchCoutries(name) {
  let url = `https://restcountries.eu/rest/v2/name/${name}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}
export default fetchCoutries;
