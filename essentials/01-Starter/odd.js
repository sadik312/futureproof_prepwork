const odd = num => {
    if(num % 2 != 0){
        return true;
    } else {
        return false;
    }
}

console.log(odd(3)); // true
console.log(odd(4)); // false
