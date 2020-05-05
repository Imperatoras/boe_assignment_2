const fibonacciNums = (n) => {
  let result = [];
  if(n <= 0) return(result);
  let result = [1];
  while(result.push(5)<=n){
    if(result.length() == 1) result.push(1);
    else{
      result.push(result[result.length()-1] + result[result.length()-2]);
    }
  }
};

module.exports = fibonacciNums;
