import React from 'react';
import Square from './Square';
import Knight from './Knight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare';

const renderSquare = (i, knightPosition, setKnightPosition) => {

	const x = i % 8;
	const y = Math.floor(i / 8);

	return (
		<div key={`board-square-${i}`}
			style={{ width: '12.5%', height: '12.5%' }}>
			<BoardSquare x={x} y={y} setKnightPosition={setKnightPosition}>
				{ renderPiece(x, y, knightPosition) }
			</BoardSquare>
		</div>
	);
}

function renderPiece(x, y, [knightX, knightY]) {
	if (x === knightX && y === knightY) {
		return <Knight />
	}
}

export default function Board({ knightPosition, setKnightPosition }) {
	const squares = [];
	for ( let i = 0; i < 64; i++) {
		squares.push(renderSquare(i, knightPosition, setKnightPosition))
	}

	return (
		<DndProvider backend={HTML5Backend}>
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
		</DndProvider>
	);
}
