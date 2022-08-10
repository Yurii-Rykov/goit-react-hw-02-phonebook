import React from 'react';
import s from './ContactList.module.css'
import PropTypes from 'prop-types'

class ContactList extends React.Component {
  render() {
    const { onContacts, onDelete } = this.props;
    
    return (
      <ul className={s.contacts}>
        {onContacts.map(({ name, number, id }) => (
          <li key={id} className={s.contacts_item}>
            {name}: {number}
            <button
              type="button"
              className={s.btnDelete}
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

ContactList.propTypes ={
  onContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ContactList;
