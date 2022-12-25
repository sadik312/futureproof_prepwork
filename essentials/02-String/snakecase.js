// complete the function snakeCase that takes in a word and returns a snake_cased string
// the Capital letter will be downcased and preceded by and understore

const snakeCase = str => {
  // split words by capital letter after first word
  // using regular expression to split the words
  const words = str.split(/(?=[A-Z])/);

  // uncapitalise first letter of each word after first word
  for(let i=1; i<words.length; i++){
    words[i] = words[i].charAt(0).toLowerCase()+words[i].slice(1);
  }
    // place words back together forming snakeCase
    const result = words.join("_"); // adding underscore between each word
    return result;
  }
  
  
  console.log(snakeCase("snakeCase")); // => snake_case
  console.log(snakeCase("aVariable")); // => a_variable
