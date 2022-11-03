/** @format */
//@ts-check

import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import Declare from './Declare';
import LocalStorageMe from './LocalStorageMe';
import LocalStoragePerm from './LocalStoragePerm';

const MyEffect = () => {
	const [isMounted, setIsMounted] = useState(true);

	return (
		<div>
			<h1 className='text-blue-500'>This is a heading</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
				placeat laboriosam sunt fugiat commodi molestiae accusantium qui
				totam? Illo recusandae placeat tenetur totam voluptas deserunt.
				Maiores provident est animi veniam?
			</p>
			{isMounted ? <Declare /> : null}
			<div>
				<input
					onChange={(e) => {
						setIsMounted(e.target.checked);
					}}
					checked={isMounted}
					type='checkbox'
				/>
				{isMounted ? 'Unmount' : 'Mount'}
			</div>
			<h3 className='text-4xl'>The local storage how behaves</h3>
			{/* <LocalStorageMe />
			 */}
			<LocalStoragePerm />
		</div>
	);
};

export default MyEffect;

function Counter() {
	const [count, setCount] = useState(10);

	console.log(count, 'Counter');

	useEffect(() => {
		let intervalId;

		intervalId = setInterval(() => {
			if (count <= 0) {
				clearInterval(intervalId);
				//to avalid running the next piece of code setCount
				return;
			}
			setCount(count - 1); // You want to increment the counter every second...
		}, 1000);

		return () => clearInterval(intervalId);
	}, [count]); // 🚩 ... but specifying `count` as a dependency always resets the interval.
	// ...

	return <p>{count}</p>;
}
