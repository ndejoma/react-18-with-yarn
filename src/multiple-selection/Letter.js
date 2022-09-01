/** @format */

export default function Letter({ letter, onToggle, isSelected }) {
	return (
		<li className={isSelected ? 'selected' : ''}>
			<label>
				<input
					type='checkbox'
					checked={isSelected}
					onChange={e => {
						console.dir(e.target);
						onToggle(letter.id);
					}}
				/>
				{letter.subject}
			</label>
		</li>
	);
}
