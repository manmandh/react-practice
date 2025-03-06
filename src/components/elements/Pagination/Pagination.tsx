import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPages = () => {
    const pages: (JSX.Element | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-4 py-2 rounded-[12px] ${
              i === currentPage
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-blue-500 hover:text-white"
            }`}
          >
            {i}
          </button>
        );
      } else if (
        (i === currentPage - 2 || i === currentPage + 2) &&
        !pages.includes("...")
      ) {
        pages.push(<span key={`ellipsis-${i}`} className="px-3">...</span>);
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200"
        >
          {"<"}
        </button>
      )}
      {renderPages()}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

