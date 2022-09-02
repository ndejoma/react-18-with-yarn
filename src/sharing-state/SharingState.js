/** @format */

import React from 'react';
import { useState } from 'react';

const data = [
	{
		title: 'About',
		content:
			" With a population of about 2 million, Almaty is Kazakhstan's largest city."
	},
	{
		title: 'Etymology',
		content:
			"The name comes from алма, the Kazakh word for 'apple' and is often translated as 'full of apples'. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple."
	}
];

function Panel({ idx, title, children, handleActiveItem = f => f, activeIdx }) {
	const isActive = activeIdx === idx;
	return (
		<section className='panel'>
			<h3>{title}</h3>
			{isActive ? (
				<p>{children}</p>
			) : (
				<button onClick={() => handleActiveItem(idx)}>Show</button>
			)}
		</section>
	);
}

function Accordion() {
	const [activeIdx, setActiveIdx] = useState(null);

	const handleActiveItem = idx => {
		setActiveIdx(idx);
	};
	return (
		<>
			<h2>Almaty, Kazakhstan</h2>
			{data.map((item, idx) => {
				return (
					<Panel
						activeIdx={activeIdx}
						idx={idx}
						handleActiveItem={handleActiveItem}
						key={idx}
						title={item.title}>
						{item.content}
					</Panel>
				);
			})}
		</>
	);
}

export default function SharingState() {
	return <Accordion />;
}
