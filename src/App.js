/** @format */

import { useState } from 'react';
import { initialTravelPlan } from './places.js';
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

function PlaceTree({ id, placesById, parentId, excludePlace }) {
	const place = placesById[id]; // placesById[2] = Africa
	const childIds = place.childIds; // [3, 4, 5, 6, 7, 8, 9]

	return (
		<>
			<li>
				{place.title}{' '}
				<span>
					<button
						onClick={() => {
							excludePlace(parentId, id);
						}}>
						Complete Visit
					</button>
				</span>
			</li>{' '}
			{/* Africa*/}
			{childIds.length > 0 && (
				// create a list of all African countries with their id
				<ol>
					{childIds.map(childId => (
						<PlaceTree
							parentId={id}
							key={childId}
							id={childId}
							placesById={placesById}
							excludePlace={excludePlace}
						/>
					))}
				</ol>
			)}
		</>
	);
}
function TravelPlan() {
	const [plan, setPlan] = useState(initialTravelPlan);

	const root = plan[0];
	//countries on earth are the children
	const planetIds = root.childIds;

	//create a function to exclude place
	const excludePlace = (placeParentId, placeId) => {
		const parent = plan[placeParentId];

		//update the parent not to include the current place completed by filtering it out from the parents childId
		const updatedParent = {
			...parent,
			childIds: parent.childIds.filter(childId => childId !== placeId)
		};
		//upate the plan to include the new parent
		setPlan({
			...plan,
			[placeParentId]: updatedParent
		});
	};
	return (
		<>
			<h2>Places to visit</h2>
			<ol>
				{planetIds.map(id => (
					<PlaceTree
						parentId={0}
						key={id}
						id={id}
						placesById={plan}
						excludePlace={excludePlace}
					/>
				))}
			</ol>
		</>
	);
}

/***Challenge 2 */
const App = () => {
	return (
		<>
			{/* <Canvas /> */}
			{/* <List /> */}
			{/* <Form /> */}
			{/* <Messenger />
			 */}
			{/* <TaskApp />
			 */}
			{/* <MyTaskApp /> */}
			{/* <Picture /> */}
			<TravelPlan />
		</>
	);
};

export default App;
