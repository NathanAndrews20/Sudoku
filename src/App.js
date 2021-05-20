import React, { useEffect, useState } from 'react'
import SudokuInstance from './components/SudokuInstance/SudokuInstance'
import SelectDifficultyModalBox from './components/SelectDifficultyComponents/SelectDifficultyModalBox'

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
    <div id='app'>
      <SelectDifficultyModalBox
        onSelection={handleDifficultySelection} 
        visibility={needToSelectDifficulty}/>
      <h1 id='heading'>Sudoku</h1>
      <h2 id='sub-heading'>The classic combinatorial game of l</h2>
      <div id='operation-buttons-container'>
        <button
          id="new-game-button"
          onClick={handleNewGame}>New Game
        </button>
        <button
          id="select-difficulty-button"
          onClick={handleSelectDifficulty}>Select Difficulty
        </button>
      </div>
      {gameInstance}
    </div>
  )
}

export default App
