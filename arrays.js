//var chocolateBars = new Array()
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var ele ="foo"
function addElementToBeginningOfArray(chocolateBars,ele) {
  return (ele,...chocolateBars)
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,ele){
  chocolateBars.unshift(ele)
  return chocolateBars
}

function addElementToEndOfArray (chocolateBars,ele){
  return (...chocolateBars,ele)
}

function destructivelyAddElementToEndOfArray(chocolateBars,ele){
  chocolateBars.push(ele)
  return chocolateBars
}

function accessElementInArray(chocolateBars,index){
  return chocolateBars[index]
}
