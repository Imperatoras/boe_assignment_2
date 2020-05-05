const filterOdd = (arr) => {
  let a = [];
  for(i in a){
    if(i%2 == 1) {a.push(i);}
  }
  return(a);
};

module.exports = filterOdd;
