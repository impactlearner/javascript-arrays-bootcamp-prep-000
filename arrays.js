var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element){
  return = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}
function addElementToEndofArray(array, element){
  array.push(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return array[2]
}
function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array.pop()
  return array
}
