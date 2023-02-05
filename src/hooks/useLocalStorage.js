/** @format */

import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue, deferSaving = 500) {
	//set it to be the initial value
	const [value, setValue] = useState(() => {
		console.log('******* I am setting state ^^^^^^^');
		if (typeof window !== 'undefined') {
			try {
				//get the initialValue from localStorage if window is defined(Client side execution)
				const initialFromLocal = JSON.parse(
					window.localStorage.getItem(key)
				);

				console.log(
					initialFromLocal,
					'INITIAL LOCAL**************************** CLIENT SIDE USE STATE'
				);
				console.log(initialFromLocal ?? initialValue, 'Value returned');
				//return the value from localStorage if it exists
				return initialFromLocal ?? initialValue;
			} catch (err) {
				console.log(
					initialValue,
					'Initial on the #######client$$$$$$ side'
				);
				return initialValue;
			}
		} else {
			//if server-rendered Node.js, Deno, Bun  or Cloudflare workers environment run this
			console.log(
				'The initial setter on ****SERVER*** &&&&&&&&&&&&&&&@@'
			);
			return initialValue;
		}
	});

	//load the value from localStorage when the component is first rendered
	//that is added using root element created using createRoot or hydrate root
	//no need to check if window is defined because useEffect run on the browser only

	//save the value to local storage any time the value changes
	useEffect(() => {
		console.log('The value change ****** now saving to local storage');
		let timerId = window.setTimeout(() => {
			window.localStorage.setItem(key, JSON.stringify(value));
		}, deferSaving);

		//clean up the timer if the value changes
		return () => {
			console.log('The cleanup function was run');
			clearTimeout(timerId);
		};
	}, [value, deferSaving, key]);

	return [value, setValue];
}
