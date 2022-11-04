/** @format */
//@ts-check

import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import Declare from './Declare';
import List from './List';
import LocalStorageMe from './LocalStorageMe';
import LocalStoragePerm from './LocalStoragePerm';

const MyEffect = () => {
	const [isMounted, setIsMounted] = useState(true);

	return (
		<div className='mt-16'>
			<List />
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
