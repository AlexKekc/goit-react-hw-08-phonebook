import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/statusFiltersSlice';
import { StatusFilterWrapper, StatusFilterButton } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <StatusFilterWrapper>
      <StatusFilterButton
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </StatusFilterButton>
      <StatusFilterButton
        selected={filter === statusFilters.general}
        onClick={() => handleFilterChange(statusFilters.general)}
      >
        General
      </StatusFilterButton>
      <StatusFilterButton
        selected={filter === statusFilters.favourite}
        onClick={() => handleFilterChange(statusFilters.favourite)}
      >
        Favourite
      </StatusFilterButton>
    </StatusFilterWrapper>
  );
};
