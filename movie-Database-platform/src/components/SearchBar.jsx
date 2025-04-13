import React from "react";

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
      <input
        type="text"
        className="w-full md:w-80 px-4 py-2 text-black rounded-md"
        placeholder="Search Your Favourite..."
        value={value}
        onChange={onChange}
      />
      <button
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
