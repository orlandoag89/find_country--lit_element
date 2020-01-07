/* const countryNamesData = await fetchAndLogCountries().then(data =>
  data.map(country => country.name)
);
console.log("countryNamesData:", countryNamesData); */

/* const lettersOfName = countryNamesData.map(i => i.split(""));
    console.log("lettersOfName:", lettersOfName); */

/*  async markupCountry() {
    await fetchAndLogCountries().then(data => {
      return data
        .map(country => {
           console.log("country", country); 
          return `<p class="country-name">${country.name}</p>
          <div class="description">
            <div>
             <p><span class="headline">Capital:</span> ${country.capital}</p>
              <p><span class="headline">Population:</span> ${
                country.population
              }</p>
              Languages:
              ${country.languages
                .map(language => `<li>${language.name}</li>`)
                .join(" ")}
            </div>
            <img src="${
              country.flag
            }" alt="This is the flag!" class="flag" width="300px">
          </div>`;
        })
        .join(" ");
    });
  } */
