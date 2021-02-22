import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import { observe } from './Game';

function App() {
	const [knightPosition, setKnightPosition] = useState([0, 0]);

	const rendered = observe((knightPosition) => {
		return (<div className="App">
			<Board knightPosition={knightPosition} />
		</div>);
	  }
	);

	return <div className="App">
		<Board knightPosition={knightPosition} setKnightPosition={setKnightPosition} />
	</div>;

}

export default App;
