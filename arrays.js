var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element){
  var newArray=[element, array[0]];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return [...array, element];
  return array;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
array;
}
function removeElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}
