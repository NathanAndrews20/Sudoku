import React, { useState } from 'react'

const Cell = ({ cellData, isStaticCell, onFocus, onChange }) => {
  const [currentValue, setCurrentValue] = useState(cellData.value)

  return (
    <input
      id={`c${cellData.rowIndex}${cellData.colIndex}`}
      className='cell' 
      value={(currentValue === 0) ? "" : currentValue}
      onChange={event => {
        setCurrentValue(parseInt(event.target.value) || 0)
        onChange(parseInt(event.target.value) || 0, cellData.rowIndex, cellData.colIndex)
      }}
      onFocus={() => onFocus([cellData.rowIndex, cellData.colIndex, cellData.subgrid])}
      style={{backgroundColor: cellData.color}}
      readOnly={isStaticCell}
    />
  )
}

export default Cell