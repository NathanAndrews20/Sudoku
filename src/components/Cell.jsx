import React, { useState } from 'react'

const Cell = ({ cellData }) => {
  const [currentValue, setCurrentValue] = useState(cellData.value)

  return (
    <input
      className='cell' 
      value={(currentValue === 0) ? "" : currentValue}
      onChange={event => setCurrentValue(event.target.value)}
    />
  )
}

export default Cell