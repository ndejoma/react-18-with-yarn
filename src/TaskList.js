/** @format */

import React from 'react';

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
	return (
		<ul
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px'
			}}>
			{tasks.map(task => {
				return (
					<li
						key={task.id}
						style={{ display: 'flex', gap: '12px', flexGrow: '1' }}>
						{task.done ? (
							<span style={{ color: 'green' }}>Done</span>
						) : (
							<span style={{ color: 'yellow' }}>To be done</span>
						)}
						<input
							value={task.text}
							type='text'
							onChange={e => onChangeTask(e.target.value)}
						/>{' '}
						<button onClick={() => onDeleteTask(task.id)}>
							Delete
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default TaskList;
