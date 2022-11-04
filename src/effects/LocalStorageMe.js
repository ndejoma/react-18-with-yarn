/** @format */

import React, { useEffect, useState } from 'react';

const LocalStorageMe = () => {
	const [localValue, setLocalValue] = useState({
		email: 'sjsjjsjsjjsj@gmail.com'
	});
	const [email, setEmail] = useState('');

	console.log(email, 'THe email on every render ');

	//save the localValue when it changes to localStorage
	useEffect(() => {
			let timerId = setTimeout(() => {
				console.log('The local value was set');
				window.localStorage.setItem(
					'maValue',
					JSON.stringify({email})
				);
			}, 500);

			return () => {
				window.clearTimeout(timerId);
			};
	}, [email]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			//load the value from local storage
			try {
				const item = JSON.parse(window.localStorage.getItem('maValue'));
				console.log(item, 'The item $$$$$$$$$$');
				setEmail(item.email);

				if (item) {
					console.log('THere was an item ');
					console.log(`THe old value was`, localValue);
					setLocalValue(localValue);
				}
			} catch (err) {
				console.log('There was an error');
			}
		}
	}, []);
	return (
		<div>
			<h3>LocalStorageMe and value is {JSON.stringify(localValue)}</h3>
			<br />
			<br />
			<div className='flex flex-col gap-3'>
				<label className='block' htmlFor=''>
					Type email to change
				</label>
				<input
					className='border-gray-700 max-w-md py-2 px-2 block border-2'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type='text'
				/>
			</div>
			<p>
				Your email is{' '}
				<span className='text-green-700'>
					{' '}
					{email ?? null}
				</span>
			</p>
		</div>
	);
};

export default LocalStorageMe;
