'use client';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = ({ paginateFunction }) => {
  const { totalPage, currentPage, setCurrentPage, goToNextPage, goToPreviousPage } = paginateFunction;

  // Function to generate visible page numbers with "..."
  const generatePages = () => {
    const pages = [];
    const delta = 2; // number of pages around currentPage

    if (totalPage <= 7) {
      // Show all pages if less than 7
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > delta + 2) {
        pages.push("...");
      }

      for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPage - 1, currentPage + delta); i++) {
        pages.push(i);
      }

      if (currentPage < totalPage - (delta + 1)) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPage);
    }
    return pages;
  };

  const pages = generatePages();

  return (
    <div className="container">
      <ul className="flex items-center justify-center gap-2">
        {/* Previous Button */}
        <li>
          <button
            onClick={goToPreviousPage}
            className={`flex h-10 w-10 items-center justify-center rounded border border-gray-400 text-sm font-medium duration-300 
              ${currentPage === 1 ? 'opacity-50 cursor-not-allowed text-gray-400' : 'hover:bg-gray-200'}`}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </li>

        {/* Page Numbers with "..." */}
        {pages.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="flex h-10 w-10 items-center justify-center text-gray-500">...</span>
            ) : (
              <button
                className={`flex h-10 w-10 items-center justify-center rounded border border-gray-400 text-sm font-medium 
                  ${page === currentPage ? 'bg-black text-white' : 'hover:bg-gray-200'}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={goToNextPage}
            className={`flex h-10 w-10 items-center justify-center rounded border border-gray-400 text-sm font-medium duration-300 
              ${currentPage === totalPage ? 'opacity-50 cursor-not-allowed text-gray-400' : 'hover:bg-gray-200'}`}
            disabled={currentPage === totalPage}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
