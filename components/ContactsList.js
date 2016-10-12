import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
    constructor () {
      super();
      this.state = {
        search: '' // initial state of input region (empty).
      };
      this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch (event) {
      // console.log(event.target.value);
      this.setState({search: event.target.value.substr(0,10)});
    }
    render() {
      let filterContacts = this.props.contacts.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
        return (
            <div>
                <input type='text' placeholder='Text here' value={this.state.search} onChange={this.updateSearch}></input>
                <ul>
                    {filterContacts.map((contact) => {
                        return <Contact contact={contact} key={contact.id}/>
                    })}
                </ul>
            </div>

        )
    }
}

export default ContactsList;
