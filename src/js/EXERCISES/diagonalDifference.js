/*
From HackerRanck
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below: */ 

function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonal = []
    let secondaryDiagonal = []
    
    for (let i = 0; i < arr.length; i ++) {
      
      primaryDiagonal.push(arr[i][i])
      secondaryDiagonal.push(arr[i][arr.length -1 -i]);
        
      console.log(primaryDiagonal)
      console.log(secondaryDiagonal)
      
    }
    const sumPrimary = primaryDiagonal.reduce((acc, num) => acc + num, 0)
    const sumSecondary = secondaryDiagonal.reduce((acc, num) => acc + num, 0)
    
   return Math.abs((sumPrimary - sumSecondary))

}


diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])