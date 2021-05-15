import React, { useState } from 'react'
import SudokuBoard from './SudokuBoard'
import UtilityFunctions from '../utils/UtilityFunctions.js'

const SudokuInstance = ({ boardFromUrl }) => {
  const buildBoardObject = boardArray => {
    const board = []
    for (let rowIndex = 0; rowIndex < boardArray.length; rowIndex++) {
      const boardArrayRow = boardArray[rowIndex]
      const boardRow = []
      for (let colIndex = 0; colIndex < boardArrayRow.length; colIndex++) {
        boardRow.push({
          rowIndex,
          colIndex,
          subgrid: UtilityFunctions.getSubgrid(rowIndex, colIndex),
          value: boardArray[rowIndex][colIndex],
          isStatic: boardArray[rowIndex][colIndex] !== 0
        })
      }
      board.push(boardRow)
    }
    return board
  }

  const [boardObject, setBoardObject] = useState(buildBoardObject(boardFromUrl))

  const handleSubmit = (event) => {
    event.preventDefault()
  }


  return (
    <form id="sudoku-instance-form" onSubmit={handleSubmit}>
      <SudokuBoard boardObject={boardObject}/>
      <input type="submit"/>
    </form>
  )
}

export default SudokuInstance