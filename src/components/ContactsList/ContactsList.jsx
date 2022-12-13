import { useSelector } from 'react-redux';
import { selectContacts, selectFindFilter } from 'redux/selectors';
import { Contacts } from './ContactsList.styled';
import { ContactsItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const filter = useSelector(selectFindFilter);
  const contacts = useSelector(selectContacts);
  // const contacts = useSelector(selectVisibleContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Contacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </Contacts>
  );
};
