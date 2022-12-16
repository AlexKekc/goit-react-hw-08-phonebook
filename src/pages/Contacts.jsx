import { AddingContactsForm } from '../components/AddingContactsForm/AddingContactsForm';
import { SearchingFilter } from '../components/SearchingFilter/SearchingFilter';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Container,
  PhonebookContainer,
  PhonebookTitle,
  ContactsContainer,
  ContactsTitle,
} from './Contacts.styled';
import { selectError, selectIsLoadiang } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadiang);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <AddingContactsForm />
      </PhonebookContainer>
      <ContactsContainer>
        <ContactsTitle>Contacts</ContactsTitle>
        <SearchingFilter />
        {isLoading && !error && <Loader />}
        <ContactsList />
      </ContactsContainer>
    </Container>
  );
};

export default Contacts;
