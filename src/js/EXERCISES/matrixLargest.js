// This excercise was one of the mock tests on Hacerranck and I had a lot of trouble solving it. 
/* The idea is that you get a matrix array 2n x 2n, and you need to return the sum of the upper left corner.  */

function flippingMatrix(matrix) {
    const matrix_rows = matrix.length;           
    const matrix_columns = matrix[0].length;     
    const n = matrix_rows / 2;                  
    
    let sum = 0;
    
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            sum += Math.max(
                matrix[i][j],                               
                matrix[i][matrix_columns - 1 - j],          
                matrix[matrix_rows - 1 - i][j],             
                matrix[matrix_rows - 1 - i][matrix_columns - 1 - j] 
            );
        }
    }
    
    return sum;
}

const matrix1 = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
];

console.log(flippingMatrix(matrix1)); 