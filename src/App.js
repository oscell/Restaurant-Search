import React, { useCallback } from 'react';
import './App.css';
import useAlgoliaSearch from './hooks/useAlgoliaSearch';
import Filter from './components/Filter/Filter';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  const { results, handleSearch, handleFilterChange } = useAlgoliaSearch();

  // Use useCallback to memoize the function to avoid unnecessary re-renders
  const onSearch = useCallback((term) => {
    handleSearch(term);
  }, [handleSearch]);

  return (
    <div class="page">
    <div class="page__container">
    <div className="main-container">
      <SearchBar onSearch={onSearch} />
      <div className="content-container">
        <Filter results={results} onFilterChange={handleFilterChange} />
        <SearchResults results={results} />
      </div>
    </div>
    </div>
  </div>
  );
};

export default App;
