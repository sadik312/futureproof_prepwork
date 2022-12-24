// complete the function swap2 that takes in a word and returns an object returning the original string and the swpacased string

// Complete the function below
const swap2 = (word) => {
    // iterate through each character of string and capitalise uncapilised letters & uncapitalise capitalised letters
    var new_word = "";
    for(var i=0; i<word.length; i++){
      if(word[i] === word[i].toLowerCase()){
        new_word += word[i].toUpperCase();
      } else {
        new_word += word[i].toLowerCase(); 
      }
    }
    return { original: word, swapcased: new_word }
  }
  console.log(swap2("hELLo"))
  // => { original: 'hELLo', swapcased: 'HellO' }
  console.log(swap2("betH"))
  // => { original: 'betH', swapcased: 'BETh' }
  console.log(swap2("jaGaN"))
  // => { original: 'jaGaN', swapcased: 'JAgAn' }
  console.log(swap2("sergI"))
  // => { original: 'sergI', swapcased: 'SERGi' }
