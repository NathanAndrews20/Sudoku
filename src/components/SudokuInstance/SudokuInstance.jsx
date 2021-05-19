import React, { useEffect, useState } from 'react'
import SudokuBoard from './SudokuBoard'
import UtilityFunctions from '../../utils/UtilityFunctions.js'
import SudokuChecker from '../../utils/SudokuChecker.js'

const SudokuInstance = ({ boardFromUrl }) => {
  const [isSolved, setIsSolved] = useState(false)
  const [boardObject, setBoardObject] = useState(UtilityFunctions.buildBoardObject(boardFromUrl))

  useEffect(() => {
    setBoardObject(UtilityFunctions.buildBoardObject(boardFromUrl))
  }, [boardFromUrl])

  function getUpdatedBoardObject(newBoardObject){
    setBoardObject(newBoardObject)
  }

  const handleSubmit = (event) => {
    setIsSolved(SudokuChecker.checkIfSolved(boardObject))
    event.preventDefault()
  }

  return (
    <form id="sudoku-instance-form" onSubmit={handleSubmit}>
      <div>This board {isSolved ? "is" : "is not"} solved</div>
      <SudokuBoard boardObject={boardObject} onChange={getUpdatedBoardObject} boardFromUrl={boardFromUrl}/>
      <input type="submit" />
    </form>
  )
}

export default SudokuInstance