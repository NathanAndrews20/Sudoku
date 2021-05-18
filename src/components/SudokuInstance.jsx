import React, { useState } from 'react'
import SudokuBoard from './SudokuBoard'
import UtilityFunctions from '../utils/UtilityFunctions.js'
import SudokuChecker from '../utils/SudokuChecker.js'

const SudokuInstance = ({ boardFromUrl }) => {
  const [isSolved, setIsSolved] = useState(false)

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
          isStatic: boardArray[rowIndex][colIndex] !== 0,
          cellBorderWidths: UtilityFunctions.getBorderStyling(rowIndex, colIndex)
        })
      }
      board.push(boardRow)
    }
    return board
  }

  const [boardObject, setBoardObject] = useState(buildBoardObject(boardFromUrl))

  function getUpdatedBoardObject(newBoardObject){
    setBoardObject(newBoardObject)
  }

  const handleSubmit = (event) => {
    console.log(boardObject)
    setIsSolved(SudokuChecker.checkIfSolved(boardObject))
    event.preventDefault()
  }

  return (
    <form id="sudoku-instance-form" onSubmit={handleSubmit}>
      <div>This board {isSolved ? "is" : "is not"} solved</div>
      <SudokuBoard boardObject={boardObject} onChange={getUpdatedBoardObject}/>
      <input type="submit" />
    </form>
  )
}

export default SudokuInstance