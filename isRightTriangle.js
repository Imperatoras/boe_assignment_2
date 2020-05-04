const isRightTriangle = (a, b, c) => {
  if(a == 0 || b == 0){
    return(false);
  }
  if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)){
    return(true);
  }
  if(Math.pow(a,2) + Math.pow(c,2) == Math.pow(b,2)){
    return(true);
  }
  if(Math.pow(b,2) + Math.pow(c,2) == Math.pow(a,2)){
    return(true);
  }
  return(false);
};

module.exports = isRightTriangle;
