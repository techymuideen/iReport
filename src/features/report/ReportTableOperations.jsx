// import SortBy from '../../ui/SortBy';
import Filter from '../../ui/Filter';
function ReportTableOperations() {
  return (
    <div className='sm:flex items-center justify-between gap-6 '>
      <Filter
        filterField='type'
        options={[
          { value: 'all', label: 'All' },
          { value: 'red-flag', label: 'Red-Flag' },
          { value: 'intervention', label: 'Intervention' },
        ]}
      />

      <Filter
        filterField='status'
        options={[
          { value: 'all', label: 'All' },
          { value: 'resolved', label: 'Resolved' },
          { value: 'investigation', label: 'Investigation' },
          { value: 'rejected', label: 'Rejected' },
        ]}
      />

      {/* <SortBy
        options={[
          { value: 'startDate-desc', label: 'Sort by date (recent first)' },
          { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
          {
            value: 'totalPrice-desc',
            label: 'Sort by amount (high first)',
          },
          { value: 'totalPrice-asc', label: 'Sort by amount (low first)' },
        ]}
      /> */}
    </div>
  );
}

export default ReportTableOperations;
