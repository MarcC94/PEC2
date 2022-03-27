// Check to see if any of the elements in the
// array are numbers greater than 10.

const { triggerAsyncId } = require("async_hooks");
const { rmSync } = require("fs");

function anyGreaterThan10 (input) {
  let result = input.some(function(value){
    return !(value < 10);
  });
  return result;
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  let result = input.some(function(word){
    return word.length > 10;
  });
  return result;
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  let result = input.some(function(wordList){
    const some = Array.prototype.some;

    let resultWord = some.call(wordList, word =>{
      return word == true;
    });
    return resultWord;
  });
  return result;
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  let result = input.some(function(sentence){
    return (sentence.indexOf("Lost")) !== -1;
  });
  return result;
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
