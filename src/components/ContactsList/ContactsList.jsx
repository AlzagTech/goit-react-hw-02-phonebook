import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

export const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onClick={onRemoveContact}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};
