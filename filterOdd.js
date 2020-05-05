const filterOdd = (arr) => {
  let a = [];
  for(i in a){
    if(arr[i]%2 == 1) {
      a.push(arr[i]);
    }
  }
  return(a);
};

module.exports = filterOdd;
