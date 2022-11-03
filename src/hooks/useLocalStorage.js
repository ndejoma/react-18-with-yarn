/** @format */

import React, { useEffect, useState } from 'react';

const prevalues = [];
let currIdx = 0;

export default function useLocalStorage(key, initialValue, deferSaving = 500) {
	//set it to be the initial value
	const [value, setValue] = useState(() => {
		if (typeof window !== 'undefined') {
			//get the initialValue from localStorage if window is undefined
			const initialFromLocal = JSON.parse(
				window.localStorage.getItem(key)
			);
			//return the value from localStorage if it exists
			return initialFromLocal;
		} else {
			//if server-rendered Node.js, Deno or Bun environment run this
			return initialValue;
		}
	});

	prevalues.push({
		id: currIdx++,
		value
	});

	console.log('*******************');
	console.log('&&&&& The previous value changed &&&&&&&');
	console.log(prevalues, 'previus');

	const arrLength = prevalues.length;

	if (arrLength >= 2) {
		console.log(
			Object.is(
				prevalues[arrLength - 1].value,
				prevalues[arrLength - 2].value
			)
		);
	}
	console.log(prevalues[arrLength - 1], 'The last value');
	console.log(prevalues[arrLength - 2], 'The second last');
	console.log('*******************');

	//load the value from localStorage when the component is first rendered
	//that is added using root elememnt created using createRoor or hydrate root
	//no need to check if window is defined becase useEffect run on the browser only

	useEffect(() => {
		if (typeof window !== 'undefined') {
			//get the value and parse if from localStorage '{"email": "nul"}'
			//becomes {email: null}
			const item = JSON.parse(window.localStorage.getItem(key));

			//if there is an item set is as the value
			if (item) {
				setValue(item);
			}
		}

		//[] only run when the componnent gets rendered on the browser
	}, []);

	//save the value to local storage any tinme the value changes
	useEffect(() => {
		console.log('The value change ****** now saving to local storgae');
		let timerId = window.setTimeout(() => {
			window.localStorage.setItem(key, JSON.stringify(value));
		}, deferSaving);

		//clean up the timer if the value changes
		return () => {
			console.log('The cleanup function was runs');
			clearTimeout(timerId);
		};
	}, [value]);

	return [value, setValue];
}
