import React from 'react'
import Board from './Chessboard/Board.js';

function App() {
	return (
		<div style={{height: '500px'}} >
			<Board knightPosition={[4, 4]} />
		</div>
	)
}

export default App
