/** @format */

import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
	const [taskText, setTaskText] = useState('');
	//handle task text
    const handleTextChange = e => {
        console.log(e);
		setTaskText(e.target.value);
	};
	return (
		<div style={{ marginLeft: '32px', display: 'flex', gap: '10px' }}>
			<textarea
				rows="3"
                cols="30"
				value={taskText}
				onChange={handleTextChange}
				type='text'
			/>{' '}
			<button onClick={() => onAddTask(taskText)}>Add Task</button>
		</div>
	);
};

export default AddTask;
