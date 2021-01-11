const tail = function(array) {
  if (array.length > 1) {
    return array.shift();
  }
};

module.exports = tail;