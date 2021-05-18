import React, { useEffect, useState } from 'react'
import SudokuInstance from './components/SudokuInstance/SudokuInstance'
import SelectDifficultyModalBox from './components/SelectDifficultyComponents/SelectDifficultyModalBox'
import './styles/board.css'
import './styles/select-difficulty.css'

const testBoard = require('./utils/TestBoard.json')

const App = () => {
  const [GameInstance, setGameInstance] = useState(<div>Game is Loading</div>)

  const getBoardFromUrl = async (url) => {
    const rawBoard = await fetch(url)
    const boardAsJSON = await rawBoard.json()
    return boardAsJSON
  }

  useEffect(() => {
    const url = 'https://sugoku.herokuapp.com/board?difficulty=easy'
    getBoardFromUrl(url)
      .then(response => {
        setGameInstance( <SudokuInstance boardFromUrl={/*response.board*/testBoard.initialBoard}/> )
      })
  }, [])

  return (
    <div>
      <SelectDifficultyModalBox />
      {GameInstance}
    </div>
  )
}

export default App
