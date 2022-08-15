/** @format */

import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function MyTaskApp() {
	return (
		<TasksProvider>
			<h1>Day off in Kyoto</h1>
			<AddTask />
			<TaskList />
		</TasksProvider>
	);
}
