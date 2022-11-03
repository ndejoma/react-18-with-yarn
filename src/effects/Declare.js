/** @format */

import React, { useState, useEffect } from 'react';

function throttle(
	callback = () => {
		console.log(`I am the default callback I run after ${time} ms`);
	},
	time = 500
) {
	return setTimeout(callback, time);
}

const Declare = () => {
	const [mounted, setMount] = useState(false);
	const [data, setData] = useState([]);
	const [queryText, setQueryText] = useState('todos');
	const [deferredQueryText, setDefferedQueryText] = useState(queryText);

	useEffect(() => {
		// console.log(
		// 	deferredQueryText,
		// 	'$$$$$$$$The deffered query text effect was run $$$$$$$$$$$$$$$$$$$$$$$'
		// );

		let timerId = throttle(() => {
			console.log(`I was called after ${500} ms 🔥 %%%%%%%%%%`);
			setDefferedQueryText(queryText);
		}, 1000);

		// console.log(
		// 	`@@@@@@@@The timer id is ${timerId}, when the effect was run@@@@@@@@@@`
		// );

		//the cleanup function
		return () => {
			// console.log(`**** The timer with id ${timerId} was cleared*******`);
			// console.log(
			// 	'######## The deffred value timer id was cleared ###################'
			// );
			clearTimeout(timerId);
		};
	}, [queryText]);

	useEffect(() => {
		//instantiate new AbortController object
		const controller = new AbortController();

		async function fetchData(query = '') {
			try {
				const res = await fetch(
					`https://jsonplaceholder.typicode.com/posts/1/${query}`,
					{
						signal: controller.signal
					}
				);
				const resData = await res.json();

				if (resData.length > 0) {
					setData(resData);
				}
			} catch (err) {}
		}

		fetchData(deferredQueryText);

		//the cleanup function
		return () => {
			controller.abort();
		};
	}, [deferredQueryText]);

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px'
				}}
			>
				<label htmlFor='' style={{ fontSize: '20px' }}>
					Search
				</label>
				<input
					value={queryText}
					onChange={(e) => {
						console.log(
							`THe value change and the query text is ${e.target.value}`
						);
						setQueryText(e.target.value);
					}}
					style={{
						maxWidth: '500px',
						padding: '10px'
					}}
					type='text'
				/>
			</div>
			{/* <div
				style={{
					marginTop: '40px'
				}}
			>
				{data.map((userData, idx) => {
					// console.log(userData);
					return (
						<div key={idx}>{JSON.stringify(userData, null, 4)}</div>
					);
				})}
			</div> */}
		</>
	);
};

export default Declare;
