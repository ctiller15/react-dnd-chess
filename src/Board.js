import React from 'react';
import Square from './Square';
import Knight from './Knight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

const renderSquare = (i, knightPosition, setKnightPosition) => {

	const x = i % 8;
	const y = Math.floor(i / 8);
	const black = (x + y) % 2 === 1;
	const isKnightHere = knightPosition[0] === x && knightPosition[1] === y;
	const piece = isKnightHere ? <Knight /> : null;

	return (
			<div onClick={() => handleSquareClick(x, y)} key={i} style={{width: '12.5%', height: '12.5%' }}>
				<Square black={black}>{piece}</Square>
			</div>
	)

	function handleSquareClick(toX, toY) {
		setKnightPosition([toX, toY]);
	}
}

export default function Board({ knightPosition, setKnightPosition }) {
	const squares = [];
	for ( let i = 0; i < 64; i++) {
		squares.push(renderSquare(i, knightPosition, setKnightPosition))
	}

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			{squares}
		</div>
	);
}
