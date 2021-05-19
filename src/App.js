import React, { useEffect, useState } from 'react'
import SudokuInstance from './components/SudokuInstance/SudokuInstance'
import SelectDifficultyModalBox from './components/SelectDifficultyComponents/SelectDifficultyModalBox'
import './styles/board.css'
import './styles/select-difficulty.css'

const testBoard = require('./utils/TestBoard.json')

const App = () => {
  const [gameInstance, setGameInstance] = useState(<div>Game is Loading</div>)
  const [url, setUrl] = useState('https://sugoku.herokuapp.com/board?difficulty=easy')
  const [needToLoadGame, setNeedToLoadGame] = useState(true)


  const getBoardFromUrl = async (url) => {
    const rawBoard = await fetch(url)
    const boardAsJSON = await rawBoard.json()
    return boardAsJSON
  }

  useEffect(() => {
    if(needToLoadGame) {
      getBoardFromUrl(url)
      .then(response => {
        setGameInstance( <SudokuInstance boardFromUrl={response.board/*testBoard.initialBoard*/ } /> )
        setNeedToLoadGame(false)
      })
    }
  }, [url, needToLoadGame])

  const getDifficulty = (difficulty) => {
    setUrl(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
    console.log(url)
  }

  const handleNewGame = () => {
    setNeedToLoadGame(true)
  }

  return (
    <div>
      <SelectDifficultyModalBox onSelection={getDifficulty} />
      <button id="new-game" onClick={handleNewGame}>New Game</button>
      {gameInstance}
    </div>
  )
}

export default App
