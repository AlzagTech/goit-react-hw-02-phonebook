import React from 'react';

export const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name} : {contact.number}
            </p>
            <button type="button" onClick={() => onRemoveContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
