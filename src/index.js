
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let temp = [];  
    if (matrix == undefined || matrix.length == 0)
        return temp;

    let k = 0;
    let j = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (j = 0; j < matrix[i].length; j++) {
                temp[k] = matrix[i][j];
                k++;
            }
        }
        else {
            for (j = matrix[i].length - 1; j >= 0; j--) {
                temp[k] = matrix[i][j];
                k++;
            }
        }
    }
    return temp;
}
    
