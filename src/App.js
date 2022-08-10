/** @format */

import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import Canvas from './Canvas';
import List from './Array';

// const App = () => {
// 	const [person, setPerson] = useImmer({
// 		name: 'John Maina',
// 		age: 18
// 	});
// 	return (
// 		<div>
// 			<h1>
// 				Hello {person.name} your age now is {person.age} happy birthday
// 			</h1>
// 			<br />

// 			<input
// 				type='text'
// 				onChange={e => {
// 					setPerson(draft => {
// 						draft.name = e.target.value;
// 					});
// 				}}
// 				name='name'
// 				value={person.name}
// 			/>
// 			<br />
// 			<br />
// 			<button
// 				onClick={e => {
// 					setPerson(draft => {
// 						console.dir(draft);
// 						draft.age++;
// 					});
// 				}}>
// 				Get birthdays
// 			</button>
// 		</div>
// 	);
// };

// const App = () => {
// 	const [person, updatePerson] = useImmer({
// 		name: 'Niki de Saint Phalle',
// 		artwork: {
// 			title: 'Blue Nana',
// 			city: 'Hamburg',
// 			image: 'https://i.imgur.com/Sd1AgUOm.jpg'
// 		}
// 	});

// 	const handleChange = e => {
// 		const name = e.target.name;
// 		const value = e.target.value;
// 		updatePerson(draft => {
// 			if (name === 'name') {
// 				draft[name] = value;
// 			} else {
// 				draft.artwork[name] = value;
// 			}
// 		});
// 	};
// 	return (
// 		<>
// 			<label>
// 				Name:
// 				<input
// 					name='name'
// 					value={person.name}
// 					onChange={handleChange}
// 				/>
// 			</label>
// 			<label>
// 				Title:
// 				<input
// 					name='title'
// 					value={person.artwork.title}
// 					onChange={handleChange}
// 				/>
// 			</label>
// 			<label>
// 				City:
// 				<input
// 					name='city'
// 					value={person.artwork.city}
// 					onChange={handleChange}
// 				/>
// 			</label>
// 			<label>
// 				Image:
// 				<input
// 					name='image'
// 					value={person.artwork.image}
// 					onChange={handleChange}
// 				/>
// 			</label>
// 			<p>
// 				<i>{person.artwork.title}</i>
// 				{' by '}
// 				{person.name}
// 				<br />
// 				(located in {person.artwork.city})
// 			</p>
// 			<img src={person.artwork.image} alt={person.artwork.title} />
// 		</>
// 	);
// };

// const App = () => {
// 	const [player, setPlayer] = useImmer({
// 		firstName: 'Ranjani',
// 		lastName: 'Shettar',
// 		score: 10
// 	});

// 	function handlePlusClick() {
// 		setPlayer(draft => {
// 			draft.score++;
// 		});
// 	}

// 	function handleFirstNameChange(e) {
// 		setPlayer(draft => {
// 			draft.firstName = e.target.value;
// 		});
// 	}

// 	function handleLastNameChange(e) {
// 		setPlayer(draft => {
// 			draft.lastName = e.target.value;
// 		});
// 	}

// 	return (
// 		<>
// 			<label>
// 				Score: <b>{player.score}</b>{' '}
// 				<button onClick={handlePlusClick}>+1</button>
// 			</label>
// 			<label>
// 				First name:
// 				<input
// 					value={player.firstName}
// 					onChange={handleFirstNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Last name:
// 				<input
// 					value={player.lastName}
// 					onChange={handleLastNameChange}
// 				/>
// 			</label>
// 		</>
// 	);
// };

/***Challenge 2 */
const App = () => {
	return (
		<>
			{/* <Canvas /> */}
			<List />
		</>
	);
};

export default App;
