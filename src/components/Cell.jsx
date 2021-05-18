import React, { useState } from 'react'

const staticCellColor = '#000' // black
const dynamicCellColor = '#315AAF' // dark blue

const Cell = ({ cellData, isStatic, onFocus, onChange }) => {
  const [currentValue, setCurrentValue] = useState(cellData.value)
  const textColor = isStatic ? staticCellColor : dynamicCellColor

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
      style={{color: textColor, backgroundColor: cellData.color, borderWidth: cellData.cellBorderWidths}}
      readOnly={isStatic}
    />
  )
}

export default Cell