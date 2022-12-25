// complete the function called howManyEvens that takes in an integer and returns (not console.log) how many even numbers are in the array 

// Complete the function below
const howManyEvens = arr => {
    result = 0;
    for(i=0; i<ar.length;i++){
        if(ar[i] % 2 === 0){
            result++;
        } else {
            continue;
        }
    }
    // You will need to define result
    return result;
  }
  
  
  ar = [7, 19, 33, -5, -99, 6, 12];
  console.log(howManyEvens(ar)) // =? 2
