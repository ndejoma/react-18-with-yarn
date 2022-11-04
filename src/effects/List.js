/** @format */

import React, { useState } from 'react';

const colors = [
	{
		id: 0,
		hex: '#0000ff'
	},
	{
		id: 1,
		hex: '#FF0000'
	},
	{
		id: 2,
		hex: '#00ff00'
	}
];

function Color({ hex, isSelected, id, setSelected }) {
	return (
		<li
			onClick={(e) => {
				setSelected(id);
			}}
			className={`max-w-md hover:opacity-80 cursor-pointer ${
				isSelected ? 'h-48 opacity-50 border-black border-2' : 'h-20'
			}`}
			style={{
				backgroundColor: hex
			}}
		></li>
	);
}

export default function List() {
	const [selected, setSelected] = useState(0);
	const [colorItems, setColorItems] = useState(colors);
	const [ prevItems, setPrevItems ] = useState( null );
	
	console.log(colors, 'The orgin&&&&&&&&&');

	if (colorItems !== prevItems) {
		console.log('I am not equal during a render');
		setPrevItems(colorItems);
		setSelected(null);
	}

	//the length of the colorItems
	const arrLen = colorItems.length;
	console.log(arrLen, 'The length of the array');

	return (
		<>
			<ul className='space-y-4 max-w-screen-xl mx-auto px-6'>
				{colorItems.map((color) => {
					return (
						<Color
							setSelected={setSelected}
							isSelected={Object.is(color.id, selected)}
							hex={color.hex}
							id={color.id}
							key={color.id}
						/>
					);
				})}
			</ul>
			<div className='p-6'>
				<label className='block' htmlFor=''>
					Select color
				</label>
				<input
					className='block'
					onChange={(e) => {
						setColorItems([
							...colorItems,
							{
								id: arrLen + 1,
								hex: e.target.value
							}
						]);
					}}
					type='color'
					name='color'
					id='color'
				/>
			</div>
		</>
	);
}
