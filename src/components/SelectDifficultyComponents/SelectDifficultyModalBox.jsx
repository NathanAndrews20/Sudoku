import React from 'react';
import DifficultyButton from './DifficultyButton'

const SelectDifficultyModalBox = ({ onSelection }) => {
  return (
    <div id="select-difficulty-modal-box">
      <label>Select Difficulty</label>
      <DifficultyButton difficulty={'easy'} onSelection={onSelection}/>
      <DifficultyButton difficulty={'medium'} onSelection={onSelection}/>
      <DifficultyButton difficulty={'hard'} onSelection={onSelection}/>
      <DifficultyButton difficulty={'random'} onSelection={onSelection}/>
    </div>
  )
}

export default SelectDifficultyModalBox