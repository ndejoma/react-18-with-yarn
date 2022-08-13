/** @format */

import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
	const [to, setTo] = useState(contacts[0]);
	const [message, setMessage] = useState('');
	//handle selection change
	const handleContactChange = contact => {
		setTo(contact);
		//reset the message
		setMessage('');
	};

	//hanlde message change
	const handleMessageChange = e => {
		setMessage(e.target.value);
	};
	return (
		<div>
			<ContactList
				contacts={contacts}
				selectedContact={to}
				onSelect={handleContactChange}
			/>
			<Chat
				handleMessageChange={handleMessageChange}
				contact={to}
				message={message}
			/>
		</div>
	);
}

const contacts = [
	{ name: 'Taylor', email: 'taylor@mail.com' },
	{ name: 'Alice', email: 'alice@mail.com' },
	{ name: 'Bob', email: 'bob@mail.com' }
];
