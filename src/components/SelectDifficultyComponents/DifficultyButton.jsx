import React from 'react'

const DifficultyButton = ({ difficulty, onSelection }) => {
  return (
    <button onClick={() => onSelection(difficulty)}>{difficulty}</button>
  )
}

export default DifficultyButton