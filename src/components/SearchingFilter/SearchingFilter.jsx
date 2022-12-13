import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFindFilter } from 'redux/filterSlice';
import { selectFindFilter } from 'redux/selectors';
import {
  FilterWrapper,
  FilterLabel,
  FilterInput,
} from './SearchingFilter.styled';

export const SearchingFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFindFilter);

  const changeFilter = event => {
    dispatch(setFindFilter(event.currentTarget.value.trim()));
  };

  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={changeFilter} />
      </FilterLabel>
    </FilterWrapper>
  );
};
