// hackerranck exercise
// counting sort excercise, where instead of using a comsuming sort method, you build a new array with the number of occurencies matching the number in the original array

function countingSort(arr) {
    // Write your code here
    
    let occurrencies = new Array(100).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
      
        occurrencies[arr[i]] += 1;
      
    }
    console.log(occurrencies)

}


countingSort([1,2,3,4,5,6,7,8,9,87,7,6,5,45,4,3,2,1,2,2,1,3,4,5,6,87])