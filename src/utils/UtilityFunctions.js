const getSubgrid = (rowIndex, colIndex) => {
  const rowSubgrid = Math.floor(rowIndex/3)
  const colSubgrid = Math.floor(colIndex/3)
  return 3*rowSubgrid + colSubgrid
}

const exports = { getSubgrid }

export default exports