/** @format */
import { useImmer } from 'use-immer';
import { initialTravelPlan } from './places.js';
import MailClient from './multiple-selection/MyApp.js';
import SharingState from './sharing-state/SharingState.js';
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
	const [plan, updatePlan] = useImmer(initialTravelPlan);

	const root = plan[0];
	//countries on earth are the children
	const planetIds = root.childIds;

	//create a function to exclude place
	const excludePlace = (placeParentId, placeId) => {
		updatePlan(draft => {
			const parent = draft[placeParentId];
			parent.childIds = parent.childIds.filter(
				childId => childId !== placeId
			);

			//create a function to delete all children who parent was delete
			/***
			 * If Africa was deleted all its children will be deleted
			 * From the draft by their id which maps as the key in the draft object
			 * delete keyword is a way to delete a property from an object
			 * Delete the specific object from memory
			 * It is a manual garbage collection method in JavaScript
			 */
			const deleteChildrenOfDeletedParent = placeIdToDelete => {
				const placeToDelete = draft[placeIdToDelete];
				//delete the children of the place deleted id if they exist in the draft by its id
				placeToDelete.childIds.forEach(childId =>
					deleteChildrenOfDeletedParent(childId)
				);
				delete draft[placeIdToDelete];
			};
			deleteChildrenOfDeletedParent(placeId);
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
			{/* <TravelPlan /> */}
			{/* <MailClient /> */}
			<SharingState />
		</>
	);
};

export default App;
