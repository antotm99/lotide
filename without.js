const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne !== arrayTwo) {
    console.log("Assertion Failed: " + [arrayOne] + " !== " + [arrayTwo]);
    return "Assertion Failed: " + [arrayOne] + " !== " + [arrayTwo];
  }else if (arrayOne === ArrayTwo) {
    console.log("Assertion Passed: " + [arrayOne] + " === " + [arrayTwo]);
    return "Assertion Passed: " + [arrayOne] + " === " + [arrayTwo];
  }
}

const without = function(arrayOne, itemsToRemove) {
  const newArr = [];
  for (let i = 0; i < arrayOne.length; i++) {
    if (!itemsToRemove.includes(arrayOne[i])) {
      newArr.push(arrayOne[i]);
    }
  }
  return newArr;
}

