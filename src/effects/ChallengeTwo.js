/** @format */

import React, { useState, useEffect } from 'react';
// import { initialTodos, createTodo, getVisibleTodos } from './todos.js';

let nextId = 0;
let calls = 0;

export function getVisibleTodos(todos, showActive) {
	console.log(`getVisibleTodos() was called ${++calls} times`);
	const activeTodos = todos.filter((todo) => !todo.completed);
	const visibleTodos = showActive ? activeTodos : todos;
	return visibleTodos;
}

export function createTodo(text, completed = false) {
	return {
		id: nextId++,
		text,
		completed
	};
}

export const initialTodos = [
	createTodo('Get apples', true),
	createTodo('Get oranges', true),
	createTodo('Get carrots')
];

export default function ChallengeTwo() {
	const [todos, setTodos] = useState(initialTodos);
	const [showActive, setShowActive] = useState(false);
	const [text, setText] = useState('');

	//the visible todos
	const todosShowing = getVisibleTodos(todos, showActive);

	function handleAddClick() {
		setText('');
		setTodos([...todos, createTodo(text)]);
	}

	return (
		<>
			<label>
				<input
					type='checkbox'
					checked={showActive}
					onChange={(e) => setShowActive(e.target.checked)}
				/>
				Show only active todos
			</label>

			<input
				className='border border-gray-600'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleAddClick}>Add</button>
			<ul>
				{todosShowing.map((todo) => (
					<li key={todo.id}>
						<input
							onChange={(e) => {
								//update the todos
								setTodos(
									todos.map((todoEl) =>
										todoEl.id === todo.id
											? {
													...todoEl,
													completed: e.target.checked
											  }
											: todoEl
									)
								);
							}}
							checked={todo.completed}
							className='mr-3'
							type='checkbox'
							name='check'
							id='check'
						/>
						{todo.completed ? (
							<span className='line-through decoration-red-500 decoration-2'>
								{todo.text}
							</span>
						) : (
							todo.text
						)}
					</li>
				))}
			</ul>
		</>
	);
}
