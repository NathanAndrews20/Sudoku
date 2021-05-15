import React, { useEffect, useState } from 'react'
import SudokuInstance from './components/SudokuInstance'


const App = () => {
  const [boardFromUrl, setBoardFromUrl] = useState([])

  const getBoardFromUrl = async (url) => {
    const rawBoard = await fetch(url)
    const boardAsJSON = await rawBoard.json()
    return boardAsJSON
  }

  useEffect(() => {
    const url = 'https://sugoku.herokuapp.com/board?difficulty=hard'
    getBoardFromUrl(url)
      .then(response => {
      setBoardFromUrl(response.board)
      })
  }, [setBoardFromUrl])

  return (
    <div className="App">
      <SudokuInstance boardFromUrl={boardFromUrl}/>
    </div>
  )
}

export default App
