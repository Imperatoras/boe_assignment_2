const getFrequencies = (arr) => {
  var dict = new Object();
  for(i in arr){
    if(dict[arr[i]] == "undefined") dict[arr[i]] = 1;
    else dict[arr[i]] = dict[arr[i]]++;
  }
  return(dict);
};

module.exports = getFrequencies;

//FUCK IT WE'LL COME BACK TO THIS IN A BIT BECAUSE NOOO.
