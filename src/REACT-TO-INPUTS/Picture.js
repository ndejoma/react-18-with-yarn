/** @format */

import React, { useState } from 'react';

const Picture = () => {
	const [isPictureActive, setIsPictureActive] = useState(false);

	const toggleImageActive = e => {
		setIsPictureActive(!isPictureActive);
	};
	return (
		<div
			className={`background ${
				isPictureActive ? '' : 'background--active'
			}`}>
			<img
				onClick={toggleImageActive}
				className={`picture  ${
					isPictureActive ? 'picture--active' : ''
				}`}
				alt='Rainbow houses in Kampung Pelangi, Indonesia'
				src='https://i.imgur.com/5qwVYb1.jpeg'
			/>
		</div>
	);
};

export default Picture;
