function multiplyBy10(array) {
  let newArray = array.map(function(value){
    return value * 10;
  });
  return newArray;
}

function shiftRight(array) {
  newArray = [...array.slice(array.length - 1),...array.slice(0,array.length - 1)];
  return newArray;
}

function onlyVowels(array) {
 let vowels = ["a","e","i","o","u","á","é","í","ó","ú"];
 const map = Array.prototype.map;

  let newArray = array.map(function(word){
    let aux = "";
    let readLetters = map.call(word, letter =>{
      let readVowels = vowels.map( vowel => {
        if(letter == vowel){
          aux += letter;
        }
      });
    });
    return aux;
  });
  return newArray;
};

function doubleMatrix(array) {
  let aux=[];
  for(let i = 0; i < array.length; i++){
    aux[i] = [];
    for(let j = 0; j < array[i].length; j++){
      aux[i][j]= array[i][j] * 2;   
    }
  }
  return aux;
}
     

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
