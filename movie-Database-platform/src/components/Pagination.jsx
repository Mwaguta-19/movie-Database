import React from "react";

const Pagination = ({ currentPage, onNext, onPrevious }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-10">
      <button
        onClick={onPrevious}
        disabled={currentPage <= 1}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-white">Page {currentPage}</span>
      <button
        onClick={onNext}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
