const getSubgrid = (rowIndex, colIndex) => {
  const rowSubgrid = Math.floor(rowIndex/3)
  const colSubgrid = Math.floor(colIndex/3)
  return 3*rowSubgrid + colSubgrid
}

const getBorderStyling = (rowIndex, colIndex, majorAxisWidth) => {
  const cellBorderWidthsArray = [0,0,0,0]
  if (rowIndex === 3 || rowIndex === 6) cellBorderWidthsArray[0] = majorAxisWidth
  if (colIndex === 3 || colIndex === 6) cellBorderWidthsArray[3] = majorAxisWidth
  return cellBorderWidthsArray.reduce((acc, cur) => acc + `${cur}px `, '')
}

const buildBoardObject = boardArray => {
  const board = []
  for (let rowIndex = 0; rowIndex < boardArray.length; rowIndex++) {
    const boardArrayRow = boardArray[rowIndex]
    const boardRow = []
    for (let colIndex = 0; colIndex < boardArrayRow.length; colIndex++) { 
      boardRow.push({
        rowIndex,
        colIndex,
        subgrid: getSubgrid(rowIndex, colIndex),
        value: boardArray[rowIndex][colIndex],
        isStatic: boardArray[rowIndex][colIndex] !== 0,
        cellBorderWidths: getBorderStyling(rowIndex, colIndex, 5)
      })
    }
    board.push(boardRow)
  }
  return board
}

const exports = { getSubgrid, getBorderStyling, buildBoardObject }

export default exports