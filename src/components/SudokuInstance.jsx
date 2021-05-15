import React from 'react'
import SudokuBoard from './SudokuBoard'

const SudokuInstance = ({ boardFromUrl }) => {
  return <SudokuBoard boardObject={boardFromUrl}/>
}

export default SudokuInstance