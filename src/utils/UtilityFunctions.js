const getSubgrid = (rowIndex, colIndex) => {
  const rowSubgrid = Math.floor(rowIndex/3)
  const colSubgrid = Math.floor(colIndex/3)
  return 3*rowSubgrid + colSubgrid
}

const getBorderStyling = (rowIndex, colIndex, color) => {
  const borderWidthsArray = [1,1,1,1]
  if (rowIndex === 0) borderWidthsArray[0] = 0
  if (colIndex === 0) borderWidthsArray[3] = 0
  if (rowIndex === 8) borderWidthsArray[2] = 0
  if (colIndex === 8) borderWidthsArray[1] = 0
  if (rowIndex === 3 || rowIndex === 6) borderWidthsArray[0] = 10
  if (colIndex === 3 || colIndex === 6) borderWidthsArray[3] = 10
  return borderWidthsArray.reduce((acc, cur) => acc + `${cur}px `, '')
}

const exports = { getSubgrid, getBorderStyling }

export default exports