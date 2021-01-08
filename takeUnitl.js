const takeUntil = function(array, callback) {
  array.forEach(function(item, index) {

  
    if (callback(item)) {
      array = array.slice(0, index);
    } return {
    }
  
});
return array;
}
