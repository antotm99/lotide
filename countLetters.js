const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Assertion Failed: " + [actual] + " !== " + [expected]);
    return "Assertion Failed: " + [actual] + " !== " + [expected];
  } else if (actual === expected) {
    console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    return "Assertion Passed: " + [actual] + " === " + [expected];
  }
};

const countLetters = function(allLetters, lettersToCount) {
  let countObject = {};
  for (let i = 0; i < allLetters.length; i++) {
    if (typeof countObject[allLetters.charAt(i)] === 'undefined') {
      countObject[allLetters.charAt(i)] = 1;
    } else {
      countObject[allLetters.charAt(i)] = countObject[allLetters.charAt(i)] + 1;
    }
  }
  return countObject;
}

console.log(countLetters('Anto'));