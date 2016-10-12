import React from 'react';

// Dumb Component: Stateless & Functional
const Contact = ({contact, item}) =>
<li>{contact.name} {contact.phone} {item}</li>

export default Contact;
