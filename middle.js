const middle = function(array) {
  let mid = array.length / 2;
  if (array.length < 2) {
    return;
  } else if (mid % 2 !== 0) {
    return Math.floor(mid + 1);
  } else if (mid % 2 === 0) {
    return mid, mid + 1;
  }
  return mid;
}

module.exports = middle;
