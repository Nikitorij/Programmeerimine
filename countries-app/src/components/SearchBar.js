import React from 'react';

function SearchBar({ query, setQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
