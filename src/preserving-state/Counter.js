/** @format */

import { useState } from 'react';

export default function CounterApp() {
	const [showAB, setShowAB] = useState(true);

	//get random key
	const radKey = Math.floor(Math.random() * 1000000) + 1;

	// const counter = <Counter key={radKey} />;
	const counter = showAB ? <Counter /> : <ACounter />;

	//toggleB
	// const toggleB = () => {};
	return (
		<div>
			<div>
				<label htmlFor='showB'>Show A or B</label>
				<input
					onChange={e => setShowAB(!showAB)}
					checked={showAB}
					type='checkbox'
				/>
			</div>
			{counter}
		</div>
	);
}

function Counter({ children }) {
	const [score, setScore] = useState(0);
	const [hover, setHover] = useState(false);
	const [isRendered, setIsRendered] = useState(true);

	const handleRender = e => {
		setIsRendered(e.target.checked);
	};

	let className = 'counter';
	if (hover) {
		className += ' hover';
	}

	return (
		<div
			className={className}
			onPointerEnter={() => setHover(true)}
			onPointerLeave={() => setHover(false)}>
			<div>
				<h1>{score}</h1>
				<input
					onChange={handleRender}
					checked={isRendered}
					type='checkbox'
				/>
			</div>
			{children}
			<button onClick={() => setScore(score + 1)}>Add one</button>
		</div>
	);
}
function ACounter({ children }) {
	const [score, setScore] = useState(0);
	const [hover, setHover] = useState(false);
	const [isRendered, setIsRendered] = useState(true);

	const handleRender = e => {
		setIsRendered(e.target.checked);
	};

	let className = 'counter';
	if (hover) {
		className += ' hover';
	}

	return (
		<div
			className={className}
			onPointerEnter={() => setHover(true)}
			onPointerLeave={() => setHover(false)}>
			<div>
				<h1>{score}</h1>
				<input
					onChange={handleRender}
					checked={isRendered}
					type='checkbox'
				/>
			</div>
			{children}
			<button onClick={() => setScore(score + 1)}>Add one</button>
		</div>
	);
}

console.dir(Counter);
