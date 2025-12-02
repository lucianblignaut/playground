const ctaButton = document.querySelector(".cta-button");

console.log(ctaButton);

ctaButton.addEventListener("click", handleClick);

function handleClick() {
  fetch("https://restcountries.com/v3.1/region/oceania")
    .then((response) => response.json())
    .then((countryData) => {
      //select a random country from the fetched data and populate the flag image
      const randomIndex = Math.floor(Math.random() * countryData.length);
      const randomCountry = countryData[randomIndex];
      const flagImageUrl = randomCountry.flags.png;
      const flagImageElement = document.querySelector(".flag");
      flagImageElement.src = flagImageUrl;
    });
}
