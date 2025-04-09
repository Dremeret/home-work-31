import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

export const contactsInitialState = [
  { id: 0, text: 'Віка', favourites: false },
  { id: 1, text: 'Максим', favourites: false },
  { id: 2, text: 'Іван', favourites: false },
  { id: 3, text: 'Анастасія', favourites: false },
  { id: 4, text: 'Денис', favourites: false },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.push({ id: nanoid(), favourites: false, text: action.payload });
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    toggleFavourites: (state, action) => {
      const contact = state.find(contact => contact.id === action.payload);
      if (contact) {
        contact.favourites = !contact.favourites;
      }
    },
  },
});

export const { addContact, deleteContact, toggleFavourites } =
  contactsSlice.actions;
