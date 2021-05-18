import React, { useEffect, useState } from 'react'
import SudokuInstance from './components/SudokuInstance'

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
        setGameInstance( <SudokuInstance boardFromUrl={/*response.board*/testBoard.solvedBoard}/> )
      })
  }, [])

  return GameInstance
}

export default App
