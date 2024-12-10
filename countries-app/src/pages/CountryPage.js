
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryPage() {
  const { countryName } = useParams(); 
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${countryName}`)
      .then((response) => setCountry(response.data[0]))
      .catch((error) => console.log(error));
  }, [countryName]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags[0]} alt={country.name.common} width={200} />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies).map((currency) => currency.name).join(', ')}</p>
    </div>
  );
}

export default CountryPage;
