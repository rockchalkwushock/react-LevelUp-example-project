import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './components/ContactsList';

let contacts = [{
  id: 1,
  name: 'Cody',
  phone: '012 345 6789'
}, {
  id: 2,
  name: 'Moe',
  phone: '123 867 5309'
}, {
  id: 3,
  name: 'Curly',
  phone: '978 654 3210'
}, {
  id: 4,
  name: 'Larry',
  phone: '111 222 3333'
}, {
  id: 5,
  name: 'Tiffany',
  phone: '711 187 4444'
}];

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
