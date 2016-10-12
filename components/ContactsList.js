import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
    constructor () {
      super();
      this.state = {
        search: 'Level Up'
      };
      this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch (event) {
      console.log(event.target.value);
      this.setState({search: event.target.value.substr(0,10)});
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.contacts.map((contact) => {
                        return <Contact contact={contact} key={contact.id}/>
                    })}
                </ul>
                <input type='text' value={this.state.search} onChange={this.updateSearch}></input>
            </div>

        )
    }
}

export default ContactsList;
