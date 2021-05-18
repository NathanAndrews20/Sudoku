const getSubgrid = (rowIndex, colIndex) => {
  const rowSubgrid = Math.floor(rowIndex/3)
  const colSubgrid = Math.floor(colIndex/3)
  return 3*rowSubgrid + colSubgrid
}

const getBorderStyling = (rowIndex, colIndex) => {
  const cellBorderWidthsArray = [0,0,0,0]
  if (rowIndex === 3 || rowIndex === 6) cellBorderWidthsArray[0] = 10
  if (colIndex === 3 || colIndex === 6) cellBorderWidthsArray[3] = 10
  return cellBorderWidthsArray.reduce((acc, cur) => acc + `${cur}px `, '')
}

const exports = { getSubgrid, getBorderStyling }

export default exports