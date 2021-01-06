const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual !== expected)) {
    console.log("Assertion Failed: " + [actual] + " !== " + [expected]);
    return "Assertion Failed: " + [actual] + " !== " + [expected];
  }else if (eqArrays(actual === expected)) {
    console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    return "Assertion Passed: " + [actual] + " === " + [expected];
  }
}

const middle = function(array) {
  let mid = array.length / 2;
  if (array.length < 2) {
    return [];
  } else if (mid % 2 !== 0) {
    return [Math.floor(mid + 1)];
  } else if (mid % 2 === 0) {
    return [mid, mid + 1];
  }
  return mid;
}