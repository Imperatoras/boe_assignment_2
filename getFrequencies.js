const getFrequencies = (arr) => {
  var dict = new Object();
  for(var i = 0; i < arr.length; i++){
    dict[arr[i]] = 0;
  }
  for(var a = 0; a < arr.length; a++){
    dict[arr[a]] = ++dict[arr[a]];
  }
  return(dict);
};

module.exports = getFrequencies;
