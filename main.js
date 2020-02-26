/******************
 * YOUR CODE HERE *
 ******************/
function slice(str , arr = []   ){
  


}


function repeat (str , num){
  strings = [];
  for(let i = 0; i < num; i++){
    strings += str;
  }
  return strings
}

function startsWith(str , words){
if  (slice(str, 0, words.length) === words){
  return true
} else {
  return false
}
}
console.log(startsWith("abcdef", "ab"))

function endsWith(str , words){
if(words === slice(str, str.length - words.length, str.length)){
    return true
  } else{
    return false
  }
}


function includes (arr,thing){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === thing) {
      return true;
    }
  }
  return false
}

function join(arr, separator = []){
  let str = [];
  for(let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i + 1 < arr.length){
      str += separator;
    }
  }
  return str
}

function split(str, arr){
  let words  = [];
  
  for(let i = 0; i < arr.length; i++){

  }
  return words;
}

function trimStart(str){
let words = [];
let startOut = 0;

for(let i = 0; i < str.length; i++){
if (str[i] != ' ' || startOut){
  words += str[i];
  startOut = 1
}
}
return words;
}






/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
