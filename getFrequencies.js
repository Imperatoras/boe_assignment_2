const getFrequencies = (arr) => {
  var dict = new Object();
  for(int i = 0; i < arr.length; i++){
    let str = arr[i];
    if(dict[str] == "undefined") dict[str] = 1;
    else dict[str] = dict[str]++;
  }
  return(dict);
};

module.exports = getFrequencies;

//FUCK IT WE'LL COME BACK TO THIS IN A BIT BECAUSE NOOO.
