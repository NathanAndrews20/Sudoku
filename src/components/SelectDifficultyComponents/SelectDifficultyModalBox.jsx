import React from 'react';
import DifficultyButton from './DifficultyButton'

const SelectDifficultyModalBox = ({ onSelection, visibility }) => {
  return (
    <div id="modal-box-container" style={{visibility: visibility ? 'visible' : 'hidden'}}>
      <div id="select-difficulty-modal-box">
      <label id="select-difficulty-label">Select Difficulty</label>
      <div id="difficulty-button-container">
        <DifficultyButton difficulty={'easy'} onSelection={onSelection}/>
        <DifficultyButton difficulty={'medium'} onSelection={onSelection}/>
        <DifficultyButton difficulty={'hard'} onSelection={onSelection}/>
        <DifficultyButton difficulty={'random'} onSelection={onSelection}/>
      </div>
      </div>
    </div>
  )
}

export default SelectDifficultyModalBox