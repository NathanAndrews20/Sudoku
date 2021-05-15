const checkSingleRow = boardObjectRow => {
  const set = new Set()
  for (let cellNodeIndex = 0; cellNodeIndex < boardObjectRow.length; cellNodeIndex++) {
    if(set.has(boardObjectRow[cellNodeIndex].value) || boardObjectRow[cellNodeIndex].value === 0) { 
      return false 
    }
    set.add(boardObjectRow[cellNodeIndex].value)
  }
  return set.size === boardObjectRow.length
}

const checkAllRows = boardObject => {
  return boardObject.reduce((acc, cur) => checkSingleRow(cur) && acc, true)
}

const transposeBoardObject = boardObject => {
  for (let rowIndex = 0; rowIndex < boardObject.length; rowIndex++) {
    for (let colIndex = 0; colIndex < boardObject.length; colIndex ++) {
      const temp = boardObject[rowIndex][colIndex]
      boardObject[rowIndex][colIndex] = boardObject[colIndex][rowIndex]
      boardObject[colIndex][rowIndex] = temp
    }
  }
  return boardObject
}

const checkAllColumns = boardObject => {
  return checkAllRows(transposeBoardObject(boardObject))
}

const checkAllSubgrids = boardObject => {
  for (let rowIndex = 0; rowIndex < boardObject.length; rowIndex += 3) {
    for (let colIndex = 0; colIndex < boardObject.length; colIndex += 3) {
      const set = new Set()
      for (let r = rowIndex; r < rowIndex+3; r++) {
        for(let c = colIndex; c < colIndex+3; c++) {
          if (set.has(boardObject[r][c].value)) {
            return false
          }
          set.add(boardObject[r][c].value)
        }
      }
    }
  }
  return true
}

const checkIfSolved = boardObject => {
  return checkAllRows(boardObject) && checkAllColumns(boardObject) && checkAllSubgrids(boardObject)
}

const exports = { checkIfSolved }

export default exports