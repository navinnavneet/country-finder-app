import axios from "axios";

export async function getCountries() {
  const countries = await axios.get("https://restcountries.com/v3.1/all");
  return countries.data;
}

export async function getCountryDetails(code) {
  const countries = await axios.get(
    `https://restcountries.com/v3.1/alpha/${code}`
  );
  return countries.data;
}
