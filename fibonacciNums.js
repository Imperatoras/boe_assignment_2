const fibonacciNums = (n) => {
  let result = [];
  if(n <= 0) return(result);
  result.push(0);
  while(result.length<=n){
    if(result.length == 1) result.push(1);
    else{
      result.push(result[result.length-1] + result[result.length-2]);
    }
  }
  return(result);
};

module.exports = fibonacciNums;
