/** @format */

import React, { useState, useEffect } from 'react';
// import { initialTodos, createTodo } from './todos.js';

let nextId = 0;

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

export default function TodoList() {
	const [todos, setTodos] = useState(initialTodos);
	const [showActive, setShowActive] = useState(false);

	// the active todos
	const activeTodos = todos.filter((todo) => todo.completed !== true);
	const todosToShow = showActive ? activeTodos : todos;
	const footer = showActive
		? `There are ${activeTodos.length} remaining active todos`
		: null;

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
			<NewTodo
				onAdd={(newTodo) => {
					setTodos([...todos, newTodo]);
				}}
			/>
			<ul>
				{todosToShow.map((todo) => (
					<div className='flex' key={todo.id}>
						<input
							onChange={(e) => {
								//update the todos
								setTodos(
									todos.map((todoEl) => {
										//transform the completed state
										if (todoEl.id === todo.id) {
											return {
												...todoEl,
												completed: e.target.checked
											};
										}
										//otherwise return as it is
										return todoEl;
									})
								);
							}}
							checked={todo?.completed}
							type='checkbox'
							name='Check-todo'
							id='check-todo'
						/>
						<li className='ml-3'>
							{todo.completed ? (
								<span className='line-through decoration-red-500 decoration-2'>
									{todo.text}
								</span>
							) : (
								todo.text
							)}
						</li>
					</div>
				))}
			</ul>
			{footer}
		</>
	);
}

function NewTodo({ onAdd }) {
	const [text, setText] = useState('');

	function handleAddClick() {
		setText('');
		onAdd(createTodo(text));
	}

	return (
		<>
			<input
				className='border border-gray-800'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleAddClick}>Add</button>
		</>
	);
}
