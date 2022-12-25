// complete the function capit2 that takes in a word and returns an object returning the original string and the capitalised string

// Complete the function below
const capit2 = (word) => {
    var newWord = word.toLowerCase();
    new_word = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    
    return { original: word, capitalised: new_word }
  }
  
  
  
  console.log(capit2("hELLo"))
  // => { original: 'hELLo', capitalised: 'Hello' }
  console.log(capit2("betH"))
  // => { original: 'betH', capitalised: 'Beth' }
  console.log(capit2("jaGaN"))
  // => { original: 'jaGaN', capitalised: 'Jagan' }
  console.log(capit2("sergI"))
  // => { original: 'sergI', capitalised: 'Sergi' }
