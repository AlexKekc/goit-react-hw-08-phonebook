import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const statusFiltersInitialState = {
  status: statusFilters.all,
};

const statusFiltersSlice = createSlice({
  name: 'statusFilters',
  initialState: statusFiltersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = statusFiltersSlice.actions;
export const statusFiltersReducer = statusFiltersSlice.reducer;
