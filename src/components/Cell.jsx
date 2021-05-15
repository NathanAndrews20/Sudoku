import React, { useState } from 'react'

const Cell = ({ cellData, isStaticCell, onFocus }) => {
  const [currentValue, setCurrentValue] = useState(cellData.value)

  return (
    <input
      className='cell' 
      value={(currentValue === 0) ? "" : currentValue}
      onChange={event => setCurrentValue(event.target.value)}
      onFocus={() => onFocus([cellData.rowIndex, cellData.colIndex])}
      style={{backgroundColor: cellData.color}}
      readOnly={isStaticCell}
    />
  )
}

export default Cell