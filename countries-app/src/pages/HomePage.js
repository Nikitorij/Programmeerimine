import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all') 
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div>
      <h2>Countries List</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            {}
            <Link to={`/country/${country.name.common}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
