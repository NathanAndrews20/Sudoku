import React from 'react';
import DifficultyButton from './DifficultyButton'
import RandomDifficultyButton from './RandomDifficultyButton'

const NewGameModalBox = () => {
  return (
    <div id="NewGameModalBox">
      <label>Select Difficulty</label>
      <DifficultyButton difficulty={'Easy'} />
      <DifficultyButton difficulty={'Medium'} />
      <DifficultyButton difficulty={'Hard'} />
      <RandomDifficultyButton />
    </div>
  )
}

export default NewGameModalBox