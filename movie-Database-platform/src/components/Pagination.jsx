import React from 'react';

const Pagination = ({ currentPage, handlePageChange }) => {
  return (
    <div className="mt-4 text-center">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <span className="mx-4">{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;