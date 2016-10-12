import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        search: '', // initial state of input region (empty).
        contacts: props.contacts
      };
      this.updateSearch = this.updateSearch.bind(this);
      this.addContact = this.addContact.bind(this);
    }

    updateSearch (event) {
      // console.log(event.target.value);
      this.setState({search: event.target.value.substr(0,10)});
    }

    addContact (event) {
      event.preventDefault();
      // console.log(this); // shows all of what this pertains to for the component: ContactsList.
      let name = this.refs.name.value;
      let phone = this.refs.phone.value;
      let id = Math.floor((Math.random() * 100) + 1);
      this.setState({
        // NOTE: DO NOT USE .push()!!
        // It changes this.state BAD JUJU!!!
        // Instead use .concat() - does not permanetly change the array.
        contacts: this.state.contacts.concat({id, name, phone})
      });
      this.refs.name.value = '';
      this.refs.phone.value = '';
    }

    render() {
      let filterContacts = this.state.contacts.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
        return (
            <div>
                <input type='text' placeholder='Search Contacts' value={this.state.search} onChange={this.updateSearch}></input>
                <form onSubmit={this.addContact}>
                  <input type='text' ref='name' placeholder='Contact Name'/>
                  <input type='text' ref='phone' placeholder='Contact Phone'/>
                  <button type='submit' >Add Contact</button>
                </form>
                <ul>
                    {filterContacts.map((contact) => {
                        return <Contact contact={contact} item='hello' key={contact.id}/>
                    })}
                </ul>
            </div>

        )
    }
}

export default ContactsList;
