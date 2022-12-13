import { useDispatch } from 'react-redux';
import { deleteContact, toggleCompleted } from 'redux/operations';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactCheckBox,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsListItem.styled.js';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  const handleToggle = () => dispatch(toggleCompleted(contact));

  return (
    <ContactItem key={contact.id}>
      <ContactCheckBox
        type="checkbox"
        checked={contact.favourite}
        onChange={handleToggle}
      />
      <ContactName>{contact.name}:</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  // contact: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
