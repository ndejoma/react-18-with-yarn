/** @format */

import { letters } from './data.js';
import Letter from './Letter.js';
import { useImmer } from 'use-immer';



export default function MailClient() {
	const [items, setItems] = useImmer(letters);

	// TODO: allow multiple selection
	const selectedCount = items.filter(item => item.isSelected === true).length;

	function handleSelectionChange(id) {
		setItems(draft => {
            const item = draft.find( item => item.id === id );
            console.log(item);
			item.isSelected = !item.isSelected;
		});
	}

	return (
		<>
			<h2>Inbox</h2>
			<ul>
				{items.map(letter => (
					<Letter
						key={letter.id}
						letter={letter}
						isSelected={letter.isSelected}
						onToggle={handleSelectionChange}
					/>
				))}
				<hr />
				<p>
					<b>You selected {selectedCount} letters</b>
				</p>
			</ul>
		</>
	);
}
