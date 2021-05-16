import React, { useEffect, useState } from 'react'
import Cell from './Cell'
import '../styles/board.css'

const SudokuBoard = ({ boardObject, onChange }) => {
  const [currentBoard, setCurrentBoard] = useState(boardObject)
  const [locationDataOfFocusedCell, setLocationDataOfFocusedCell] = useState([])

  const getCellLocationData = (coordinatesArray) => {
    setLocationDataOfFocusedCell(coordinatesArray)
  }

  const updateBoard = (value, rowIndex, colIndex) => {
    const tempBoard = [...currentBoard]
    tempBoard[rowIndex][colIndex].value = value
    setCurrentBoard(tempBoard)
  }

  useEffect(() => {
    const tempBoard = [...boardObject]
    const [focusedRow, focusedCol, focusedSubgrid] = locationDataOfFocusedCell
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      for (let colIndex = 0; colIndex < 9; colIndex++) {
        const cellNode = tempBoard[rowIndex][colIndex]
        const needsHighlight = (focusedRow === cellNode.rowIndex || focusedCol === cellNode.colIndex || focusedSubgrid === cellNode.subgrid)
        tempBoard[rowIndex][colIndex].color = needsHighlight ? 'rgb(127, 160, 172)' : 'lightblue'
      }
    }
    setCurrentBoard(tempBoard)
    console.log(tempBoard)
  }, [boardObject, locationDataOfFocusedCell])

  return (
    <div id='sudoku-board' onChange={() => onChange(currentBoard)}>
      {currentBoard.map(row => 
        row.map(cellNode => 
          <Cell key={`${cellNode.rowIndex}${cellNode.colIndex}`}
            cellData={cellNode}
            isStaticCell={cellNode.isStatic}
            onFocus={getCellLocationData}
            onChange={updateBoard}
          />
        )
      )}
    </div>
  )
}

export default SudokuBoard