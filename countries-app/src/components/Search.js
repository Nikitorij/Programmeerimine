import React, { useState } from 'react';

function Search({ onSearch }) {
  const [countryName, setCountryName] = useState('');

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(countryName);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter country name"
        value={countryName}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
