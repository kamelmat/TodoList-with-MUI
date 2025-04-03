// Get the only integer that doesn´t repeat from the array. Hackerranck

function lonelyinteger(a) {
    // Write your code here
    let loner = {}
    
    a.forEach((number) => {
      if(loner[number]) {
        loner[number] += 1
      } else {loner[number] = 1}
       
    });
    
    for (let number in loner){
      if(loner[number] === 1){
        return parseInt(number)
      }
    }
    
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))