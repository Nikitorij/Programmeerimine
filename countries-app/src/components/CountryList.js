import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryList({ searchQuery }) {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!searchQuery) return;

    axios
      .get(`https://restcountries.com/v3.1/name/${searchQuery}?page=${page}&limit=10`)
      .then((response) => {
        setCountries(response.data);
        setTotalPages(Math.ceil(response.data.length / 10));
      })
      .catch((error) => console.log(error));
  }, [searchQuery, page]);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>

      {}
      <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}>Next</button>
      </div>
    </div>
  );
}

export default CountryList;
