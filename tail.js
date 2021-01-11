const tail = function(array) {
  if (array.length > 1) {
    array.shift();
    return array;
  }
};

module.exports = tail;