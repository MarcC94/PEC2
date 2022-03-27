function onlyEven(array) {
  let newArray = array.filter(function(value){
    return !(value % 2);
  });
  return newArray;
}

function onlyOneWord(array) {
  let newArray = array.filter(function(value){
    let result = [];
    let noValido = / /;
    if(!noValido.test(value)){ // se chequea el regex de que el string no tenga espacio
      return result; 
    }   
  });
  return newArray;
}

function positiveRowsOnly(array) {
  let result = array.filter(function(valueList){
    const filter = Array.prototype.filter;

    let result2 = filter.call(valueList, value =>{
      return value > 0;
    });
    return result2;
  });
  return result;
}

function allSameVowels(array) {
  let vowels = ["a","e","i","o","u","á","é","í","ó","ú"];
  const filter = Array.prototype.filter;
 
  let newArray = array.filter(function(word){
      let aux = "";
      let readLetters = filter.call(word, letter =>{
           let readVowels = vowels.filter( vowel => {
              if(letter == vowel){
                  aux += letter;
              }
          });
      });
      return aux;
  });
  return newArray;
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
