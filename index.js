import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './components/ContactsList';

let contacts = {
  name: 'Cody',
  phone: '012 345 6789'
};

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App contacts={contacts} />, document.getElementById('app'));
});
