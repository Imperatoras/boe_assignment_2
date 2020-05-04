const isRightTriangle = (a, b, c) => {
  if(a*a + b*b == c*c){
    return(true);
  }
  return(false);
};

module.exports = isRightTriangle;
