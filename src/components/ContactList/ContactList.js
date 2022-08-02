import React from 'react';

class ContactList extends React.Component {

  render() {
    const {onContacts} = this.props

    return (
      <ul>
        {onContacts.map(({ name, number, id }) => (
          <li key={id}>{name}: {number}</li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
