// SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, setQuery }) => {
  // Handle input change and submit
  const handleSearchChange = (event) => {
    setQuery(event.target.value); // Set search term in the parent component
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // You could handle further validation or side effects here if needed
  };

  return (
    <div className="mb-4 bg-black justify-center">
      <logo />
      <form onSubmit={handleSearchSubmit} className="flex justify-center">
        <input
          type="text"
          className="px-4 py-2 border rounded-md w-2/3"
          placeholder="Search for a movie ..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
