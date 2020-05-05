const filterOdd = (arr) => {
  let a = [];
  for(int i = 0; i<arr.length; i++){
    if (arr[i] % 2 == 1) a.push(arr[i]);
  }
  return(a);
};

module.exports = filterOdd;
