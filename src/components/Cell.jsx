import React, { useState } from 'react'

const Cell = ({ cellData }) => {
  const [currentValue, setCurrentValue] = useState(cellData.value)

  return (
    <div className='cell'>
      {(currentValue === 0) ? "" : currentValue}
    </div>
  )
}

export default Cell