function createCountryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  const countryName = document.createElement("h2");
  countryName.textContent = country.name.common;

  const countryFlag = document.createElement("img");
  countryFlag.src = country.flags.svg;
  countryFlag.alt = `Bandeira de ${country.name.common}`;

  card.append(countryFlag, countryName);
  document.querySelector("#countries").append(card);
}

async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const countries = await response.json();
    console.log("Países carregados:", countries.length);
    countries.forEach(createCountryCard);
  } catch (error) {
    console.error("Erro ao buscar países:", error);
    const main = document.querySelector("#countries");
    main.innerHTML = `<p style="color: #f87171; text-align:center; font-size:1.2rem;">Erro ao carregar países 😢</p>`;
  }
}

getCountries();

