const baseUrl = "https://restcountries.eu/rest/v2/";

async function fetchAndLogCountries() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
}

export { fetchAndLogCountries };
