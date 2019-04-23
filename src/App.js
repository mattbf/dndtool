import React from 'react'
import logo from './logo.svg'
import './App.css'
import Knight from './Chessboard/Knight.js'
import Square from './Chessboard/Square.js'

function App() {
	return (
		<div className="App">
			<Square black>
				<Knight/>
			</Square>
		</div>
	)
}

export default App
