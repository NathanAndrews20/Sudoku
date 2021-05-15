import React, { useEffect, useState } from 'react'
import SudokuInstance from './components/SudokuInstance'


const App = () => {
  const [GameInstance, setGameInstance] = useState(<div>Game is Loading</div>)

  const getBoardFromUrl = async (url) => {
    const rawBoard = await fetch(url)
    const boardAsJSON = await rawBoard.json()
    return boardAsJSON
  }

  useEffect(() => {
    const url = 'https://sugoku.herokuapp.com/board?difficulty=hard'
    getBoardFromUrl(url)
      .then(response => {
        setGameInstance( <SudokuInstance boardFromUrl={response.board}/> )
      })
  }, [])

  return GameInstance
}

export default App
