/** @format */

import React, { useState } from 'react';

const Profile = () => {
	const handleEditProfile = e => {
		e.preventDefault();
	};
	return (
		<div className='center'>
			<form action=''>
				<div>
					<label htmlFor='firstName'>FirstName</label>
					<input placeholder='Enter first name' type='text' />
				</div>
				<div>
					<label htmlFor='firstName'>LastName</label>
					<input placeholder='Enter first name' type='text' />
				</div>
				<div>
					<button onClick={handleEditProfile}>Save Profile</button>
				</div>
            </form>
            <div></div>
		</div>
	);
};

export default Profile;
