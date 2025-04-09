import { configureStore, createSlice } from '@reduxjs/toolkit';
import { contactsSlice } from '../contactsSlice';

export const statusFilters = Object.freeze({
  all: 'all',
  default: 'default',
  favourites: 'favourites',
});

const filtersInitialState = { status: statusFilters.all };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filters: filtersSlice.reducer,
  },
});
