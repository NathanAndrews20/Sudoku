import React, { useState } from 'react'

const Cell = ({ cellData, isStaticCell }) => {
  const [currentValue, setCurrentValue] = useState(cellData.value)

  return (
    <input
      className='cell' 
      value={(currentValue === 0) ? "" : currentValue}
      onChange={event => setCurrentValue(event.target.value)}
      readOnly={isStaticCell}
    />
  )
}

export default Cell