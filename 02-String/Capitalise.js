// complete the function capitalize that takes in a word and returns a capitalised string

// Complete the function below
const capitalize = (word) => {
    // You will have to define the variable
    word = word.toLowerCase();
    //capitalise first character
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  }
  
  
  console.log(capitalize)
  console.log(capitalize("hELLo")) // => Hello
  console.log(capitalize("betH")) // => Beth
  console.log(capitalize("jaGaN")) // => Jagan
  console.log(capitalize("sergI")) // => Sergi
/*
str = "betH";
slice_str = str.slice(1);
lower_slice = slice_str.toLowerCase();
capitalisedWord= str.charAt(0).toUpperCase() + lower_slice;
console.log(capitalisedWord);
*/
