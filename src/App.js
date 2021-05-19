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
  const [needToSelectDifficulty, setNeedToSelectDifficulty] = useState(false)


  const getBoardFromUrl = async (url) => {
    const rawBoard = await fetch(url)
    const boardAsJSON = await rawBoard.json()
    return boardAsJSON
  }

  useEffect(() => {
    if(needToSelectDifficulty) {
    }
  }, [needToSelectDifficulty])
 
  useEffect(() => {
    if(needToLoadGame) {
      getBoardFromUrl(url)
      .then(response => {
        setGameInstance( <SudokuInstance boardFromUrl={response.board/*testBoard.initialBoard*/ } /> )
        setNeedToLoadGame(false)
      })
    }
  }, [url, needToLoadGame])

  const handleDifficultySelection = (difficulty) => {
    setUrl(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
    setNeedToSelectDifficulty(false)
  }

  const handleNewGame = () => {
    setNeedToLoadGame(true)
  }

  const handleSelectDifficulty = () => {
    setNeedToSelectDifficulty(true)
  }

  return (
    <div>
      <SelectDifficultyModalBox onSelection={handleDifficultySelection} visibility={needToSelectDifficulty}/>
      <button id="new-game-button" onClick={handleNewGame}>New Game</button>
      <button id="select-difficulty-button" onClick={handleSelectDifficulty}>Select Difficulty</button>
      {gameInstance}
    </div>
  )
}

export default App
