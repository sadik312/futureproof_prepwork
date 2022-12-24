// complete the function camelCase that takes in a word and returns a camelCased string
// the underscore will be removed and the letter that used to follow the understore will be capitalised

// Complete the function below
const camelCase = str => {
  // split the strings by the underscores
  const words = str.split("_");

  // capitalise first letter of each word after the first word
  for(let i=1; i<words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
  }
    // place words back together forming CamelCase convention
    const result = words.join("");
    return result;
  }
  
  
  console.log(camelCase("snake_case")); // => snakeCase
  console.log(camelCase("a_variable")); // => aVariable
