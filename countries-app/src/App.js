// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import CountryList from './components/CountryList';
import CountryPage from './pages/CountryPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div>
        <h1>Country Information</h1>
        <Search onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<CountryList searchQuery={searchQuery} />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
