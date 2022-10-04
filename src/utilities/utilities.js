export function filterByRegion(data, region) {
  return data.filter((country) => {
    return country.region === region;
  });
}

export function filterByCountryName(data, countryName) {
  return data.filter((country) => {
    return country.name.official
      .toLowerCase()
      .includes(countryName.toLowerCase());
  });
}

export function getRegions(data) {
  return [...data.reduce((acc, country) => acc.add(country.region), new Set())];
}
