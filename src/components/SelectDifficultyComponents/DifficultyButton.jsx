import React from 'react'

const DifficultyButton = ({ difficulty, onSelection }) => {
  return (
    <button className='difficulty-button' 
            onClick={() => onSelection(difficulty)}>
      {difficulty}
    </button>
  )
}

export default DifficultyButton