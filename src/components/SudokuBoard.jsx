import React from 'react'
import Cell from './Cell'
import '../styles/board.css'

const SudokuBoard = ({ boardObject }) => {
  return (
    <div id='sudoku-board'>
      {boardObject.map(row => row.map(cell => <Cell />))}
    </div>
  )
}

export default SudokuBoard