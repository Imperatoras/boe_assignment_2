const fibonacciNums = (n) => {
  let a = [];
  if(n <= 0) return(a);
  a.push(0);
  while(a.length<n){
    if(a.length == 1) a.push(1);
    else{
      a.push(a[a.length-1] + a[a.length-2]);
    }
  }
  return(a);
};

module.exports = fibonacciNums;
