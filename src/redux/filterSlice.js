import { createSlice } from '@reduxjs/toolkit';

const findFilterInitialState = '';

export const findFilterSlice = createSlice({
  name: 'findFilter',
  initialState: findFilterInitialState,
  reducers: {
    setFindFilter: {
      reducer(_, action) {
        return action.payload;
      },
    },
  },
});

export const { setFindFilter } = findFilterSlice.actions;
export const findFilterReducer = findFilterSlice.reducer;

// //Selectors
// export const selectFilter = state => state.filter;
