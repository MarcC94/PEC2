// Check to see if all elements in an array
// are even numbers.

const { read } = require("fs");

function allEven(input) {
  let result = input.every(function(value){
    return !(value % 2);
  });
  return result;
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  let result = input.every(function(value){
    if (typeof value == "number"){
      return value;
    }
  });
  return result;
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  const every = Array.prototype.every;

  let result = input.every(function(valueList){
    let readValues = every.call(valueList, value =>{
      if(value > 0 && Array.isArray(valueList)){
        return value;
      }
    });
    return readValues;
  });
  return result;
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  let vowels = ["a","e","i","o","u","á","é","í","ó","ú"];
  const every = Array.prototype.every;
  const map = Array.prototype.map;


  let result = input.every(function(word){
    let aux = "";
    //console.log(word)
    let readLetters = map.call(word, letter =>{
      //console.log(letter)
      let readVowels = vowels.map( vowel => {
        //console.log(vowel)
        if(letter == vowel){
          aux += letter;
        }
      });
    });
    console.log(aux)
    return aux;
  });
  return result;
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
