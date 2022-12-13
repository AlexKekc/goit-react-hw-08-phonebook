import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectContacts = state => state.contacts.items;

export const selectIsLoadiang = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFindFilter = state => state.findFilter;

export const selectStatusFilter = state => state.statusFilter.status;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, statusFilter) => {
    console.log('Calculating visible contacts');

    switch (statusFilter) {
      case statusFilters.general:
        return contacts.filter(contact => !contact.favourite);
      case statusFilters.favourite:
        return contacts.filter(contact => contact.favourite);
      default:
        return contacts;
    }
  }
);

export const selectContactCount = createSelector([selectContacts], contacts => {
  console.log('Calculating contact count');

  return contacts.reduce(
    (count, contact) => {
      if (contact.favourite) {
        count.favourite += 1;
      } else {
        count.general += 1;
      }
      return count;
    },
    { general: 0, favourite: 0 }
  );
});
