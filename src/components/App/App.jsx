import React from 'react';
import { AddingContactsForm } from '../AddingContactsForm/AddingContactsForm';
import { SearchingFilter } from '../SearchingFilter/SearchingFilter';
import { ContactsList } from '../ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { PhonebookTitle } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { selectError, selectIsLoadiang } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { Loader } from '../Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadiang);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <AddingContactsForm />
      <AppBar />
      <SearchingFilter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </>
  );
};
