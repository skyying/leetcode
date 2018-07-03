
function rotate(matrix, dir){

  // direction :  -1 = coutnerClockwise, 1 = clockwise
  let len = matrix.length;
  let layerCount = Math.floor(len/2);

  for(let i=0; i<layerCount; i++){
    let first = i;
    let last = len - 1 - first;
      for(let j = first; j < last; j++){
        let offset = j - first;
        let topElement = matrix[first][j];
        let rightElement = matrix[j][last];
        let bottomElement = matrix[last][last-j];
        let leftElement = matrix[last-j][first];

        matrix[j][last] = dir > 0 ? topElement : bottomElement;
        matrix[last][last-j] = dir > 0 ? rightElement : leftElement;
        matrix[last-j][first] = dir > 0 ? bottomElement : topElement;
        matrix[first][j] = dir > 0 ? leftElement : rightElement;

      } // end of for loop
  }
  return matrix;
}

const matrix = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]]

console.log(rotate(matrix, -1))
