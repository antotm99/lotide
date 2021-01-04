const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Assertion Failed: " + [actual] + " !== " + [expected]);
    return "Assertion Failed: " + [actual] + " !== " + [expected];
  } else if (actual === expected) {
    console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    return "Assertion Passed: " + [actual] + " === " + [expected];
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(array) {
  if (array.length > 1) {
    return array.shift();
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 
