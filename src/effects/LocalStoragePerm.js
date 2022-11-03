/** @format */

import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LocalStoragePerm = () => {
	const [account, setAccount] = useLocalStorage('maAccount', [
		{ email: null }
	]);

	console.log(account[0], 'The account value');

	return (
		<div>
			<div className='flex flex-col gap-3'>
				<label className='block' htmlFor='email_change'>
					Type email to change
				</label>
				<input
					className='border-gray-700 max-w-md py-2 px-2 block border-2'
					value={account[0]?.email}
					onChange={(e) => {
						setAccount([
							{
								email: e.target.value
							}
						]);
					}}
					type='text'
				/>
			</div>
			<p>
				Your email is{' '}
				<span className='text-green-700'>
					{' '}
					{account[0]?.email ?? null}
				</span>
			</p>
		</div>
	);
};

export default LocalStoragePerm;
