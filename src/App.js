/** @format */
import React from 'react';
import MyEffect from './effects/MyEffect';
// import VideoApp from './effects/VideoPlayer';
import './styles/main.css';

/***Challenge 2 */
const App = () => {
	return (
		<main
			style={{
				maxWidth: '1200px',
				marginRight: 'auto ',
				marginLeft: 'auto'
			}}
		>
			{/* <MyEffect />
			 */}
			{/* <VideoApp />
			 */}
			<MyEffect />
		</main>
	);
};

export default App;
