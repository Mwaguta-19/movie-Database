import React from 'react';

const SearchBar = ({ searchTerm, handleSearchChange, handleSearchSubmit }) => {
  return (
    <div className="mb-4">
      <form onSubmit={handleSearchSubmit} className="flex justify-center">
        <input
          type="text"
          className="px-4 py-2 border rounded-md w-2/3"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;