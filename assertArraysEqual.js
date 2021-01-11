const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne !== arrayTwo)) {
    console.log("Assertion Failed: " + [arrayOne] + " !== " + [arrayTwo]);
    return "Assertion Failed: " + [arrayOne] + " !== " + [arrayTwo];
  }else if (eqArrays(arrayOne === arrayTwo)) {
    console.log("Assertion Passed: " + [arrayOne] + " === " + [arrayTwo]);
    return "Assertion Passed: " + [arrayOne] + " === " + [arrayTwo];
  }
}

module.exports = assertArraysEqual;