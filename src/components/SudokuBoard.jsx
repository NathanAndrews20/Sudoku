import React, { useEffect, useState } from 'react'
import Cell from './Cell'
import '../styles/board.css'

const SudokuBoard = ({ boardObject }) => {
  const [currentBoard, setCurrentBoard] = useState(boardObject)
  const [coordinatesOfFocusedCell, setCoordinatesOfFocusedCell] = useState([])

  const getCellCoordinates = (coordinatesArray) => {
    setCoordinatesOfFocusedCell(coordinatesArray)
  }

  useEffect(() => {
    const tempBoard = []
    const [focusedRow, focusedCol] = coordinatesOfFocusedCell
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      const tempRow = []
      for (let colIndex = 0; colIndex < 9; colIndex++) {
        const cellNode = boardObject[rowIndex][colIndex]
        if(focusedRow === cellNode.rowIndex || focusedCol === cellNode.colIndex) {
          tempRow.push({
            ...cellNode,
            color: 'rgb(127, 160, 172)'
          })
          continue
        }
        tempRow.push(cellNode)
      }
      tempBoard.push(tempRow)
    }
    setCurrentBoard(tempBoard)
  }, [boardObject, coordinatesOfFocusedCell])

  return (
    <div id='sudoku-board'>
      {currentBoard.map(row => 
        row.map(cellNode => 
          <Cell key={`${cellNode.rowIndex}${cellNode.columnIndex}`}
            cellData={cellNode}
            isStaticCell={cellNode.isStatic}
            onFocus={getCellCoordinates}
          />
        )
      )}
    </div>
  )
}

export default SudokuBoard