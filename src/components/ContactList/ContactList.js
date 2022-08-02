import React from 'react';

class ContactList extends React.Component {
  render() {
    const { onContacts, onDelete } = this.props;
    
    return (
      <ul>
        {onContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              className="btnDelete"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
