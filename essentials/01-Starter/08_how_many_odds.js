// write a function called howManyOdds that takes in an integer and returns (not console.log) how many odd numbers are in the array 

// Write your function below
const howManyOdds = arr => {
    result = 0;
    for(i=0; i<ar.length; i++){
        if(ar[i] % 2 != 0){
            result++;
        } else {
            continue;
        }
    }
    return result; // return iterator 'result' outside loop
}


ar = [7, 19, 33, -5, -99, 6, 12]

console.log(howManyOdds(ar)) // => 5
