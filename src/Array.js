/** @format */

// import { useState } from 'react';
// import { useImmer } from 'use-immer';

// let nextId = 3;
// const initialList = [
// 	{ id: 0, title: 'Big Bellies', seen: false },
// 	{ id: 1, title: 'Lunar Landscape', seen: false },
// 	{ id: 2, title: 'Terracotta Army', seen: true }
// ];

// export default function List() {
// 	const [myList, updateMyList] = useImmer(initialList);
// 	const [yourArtworks, updateYourList] = useImmer(initialList);

// 	function handleToggleMyList(id, nextSeen) {
// 		updateMyList(draft => {
// 			const artwork = draft.find(a => a.id === id);
// 			artwork.seen = nextSeen;
// 		});
// 	}

// 	function handleToggleYourList(artworkId, nextSeen) {
// 		updateYourList(draft => {
// 			const artwork = draft.find(a => a.id === artworkId);
// 			artwork.seen = nextSeen;
// 		});
// 	}

// 	return (
// 		<>
// 			<h1>Art Bucket List</h1>
// 			<h2>My list of art to see:</h2>
// 			<ItemList artworks={myList} onToggle={handleToggleMyList} />
// 			<h2>Your list of art to see:</h2>
// 			<ItemList artworks={yourArtworks} onToggle={handleToggleYourList} />
// 		</>
// 	);
// }

// function ItemList({ artworks, onToggle }) {
// 	return (
// 		<ul>
// 			{artworks.map(artwork => (
// 				<li key={artwork.id}>
// 					<label>
// 						<input
// 							type='checkbox'
// 							checked={artwork.seen}
// 							onChange={e => {
// 								onToggle(artwork.id, e.target.checked);
// 							}}
// 						/>
// 						{artwork.title}
// 					</label>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// import { useState } from 'react';
import { useImmer } from 'use-immer';

const initialList = [
	{ id: 0, title: 'Big Bellies', seen: false },
	{ id: 1, title: 'Lunar Landscape', seen: false },
	{ id: 2, title: 'Terracotta Army', seen: true }
];

export default function BucketList() {
	const [myList, setMyList] = useImmer(initialList);
	const [yourList, setYourList] = useImmer(initialList);

	function handleToggleMyList(artworkId, nextSeen) {
		setMyList(draft => {
            const artwork = draft.find( artwork => artwork.id === artworkId)
			artwork.seen = nextSeen;
		});
	}

	function handleToggleYourList(artworkId, nextSeen) {
        setYourList( draft => {
            const artwork = draft.find( artwork => artwork.id === artworkId )
            artwork.seen = nextSeen;
        });
	}

	return (
		<>
			<h1>Art Bucket List</h1>
			<h2>My list of art to see:</h2>
			<ItemList artworks={myList} onToggle={handleToggleMyList} />
			<h2>Your list of art to see:</h2>
			<ItemList artworks={yourList} onToggle={handleToggleYourList} />
		</>
	);
}

function ItemList({ artworks, onToggle }) {
	return (
		<ul>
			{artworks.map(artwork => (
				<li key={artwork.id}>
					<label>
						<input
							type='checkbox'
							checked={artwork.seen}
							onChange={e => {
								onToggle(artwork.id, e.target.checked);
							}}
						/>
						{artwork.title}
					</label>
				</li>
			))}
		</ul>
	);
}

// let initialArtists = [
// 	{ id: 0, name: 'Marta Colvin Andrade' },
// 	{ id: 1, name: 'Lamidi Olonade Fakeye' },
// 	{ id: 2, name: 'Louise Nevelson' }
// ];

// export default function List() {
// 	const [artists, setArtists] = useState(initialArtists);

// 	return (
// 		<>
// 			<h1>Inspiring sculptors:</h1>
// 			{artists.length > 0 ? (
// 				<ul>
// 					{artists.map(artist => (
// 						<li key={artist.id}>
// 							{artist.name}{' '}
// 							<button
// 								onClick={() => {
// 									setArtists(
// 										artists.filter(a => a.id !== artist.id)
// 									);
// 								}}>
// 								Delete
// 							</button>
// 						</li>
// 					))}
// 				</ul>
// 			) : (
// 				<div>
// 					<h4>There are no array items to show</h4>
// 				</div>
// 			)}
// 		</>
// 	);
// }

// let nextId = 0;

// export default function List() {
// 	const [name, setName] = useState('');
// 	const [artists, setArtists] = useState([]);

// 	return (
// 		<>
// 			<h1>Inspiring sculptors:</h1>
// 			<input value={name} onChange={e => setName(e.target.value)} />
// 			<button
// 				onClick={() => {
// 					console.log(nextId, 'name');
// 					setArtists([
// 						{
// 							id: ++nextId,
// 							name
// 						},
// 						...artists
// 					]);
// 					setName('');
// 				}}>
// 				Add
// 			</button>
// 			<ul>
// 				{artists.map(artist => (
// 					<li key={artist.id}>{artist.name}</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }
