/** @format */


export default function Chat({ contact, message, handleMessageChange }) {
	return (
		<section className='chat'>
			<textarea
				value={message}
				placeholder={'Chat to ' + contact.name}
				onChange={handleMessageChange}
			/>
			<br />
			<button>Send to {contact.email}</button>
		</section>
	);
}
