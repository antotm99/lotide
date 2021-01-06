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
  if (eqArrays(arrayOne !== arrayTwo)) {
    console.log("Assertion Failed: " + [arrayOne] + " !== " + [arrayTwo]);
    return "Assertion Failed: " + [arrayOne] + " !== " + [arrayTwo];
  }else if (eqArrays(arrayOne === arrayTwo)) {
    console.log("Assertion Passed: " + [arrayOne] + " === " + [arrayTwo]);
    return "Assertion Passed: " + [arrayOne] + " === " + [arrayTwo];
  }
}