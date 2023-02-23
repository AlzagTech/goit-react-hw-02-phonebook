import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onClick }) => {
  const { name, number } = contact;
  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => onClick(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
