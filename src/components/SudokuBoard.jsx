import React, { useState } from 'react'
import Cell from './Cell'
import '../styles/board.css'

const SudokuBoard = ({ boardObject }) => {
  const [currentBoard, setCurrentBoard] = useState(boardObject)

  return (
    <div id='sudoku-board'>
      {currentBoard.map(row => 
        row.map(cellNode => 
          <Cell key={`${cellNode.rowIndex}${cellNode.columnIndex}`}
            cellData={cellNode}
          />
        )
      )}
    </div>
  )
}

export default SudokuBoard