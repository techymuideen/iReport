import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const PAGE_SIZE = 5;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-2 text-sm">
        Showing{' '}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{' '}
        to{' '}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center justify-center gap-1 rounded-sm px-3 py-2 text-sm font-medium transition ${
            currentPage === 1
              ? 'cursor-not-allowed bg-gray-200 text-gray-400'
              : 'hover:bg-brand-600 hover:text-brand-50 bg-gray-50'
          }`}
        >
          <HiChevronLeft className="h-5 w-5" /> <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`flex items-center justify-center gap-1 rounded-sm px-3 py-2 text-sm font-medium transition ${
            currentPage === pageCount
              ? 'cursor-not-allowed bg-gray-200 text-gray-400'
              : 'hover:bg-brand-600 hover:text-brand-50 bg-gray-50'
          }`}
        >
          <span>Next</span> <HiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Pagination;
