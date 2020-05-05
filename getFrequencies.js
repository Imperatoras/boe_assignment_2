const getFrequencies = (arr) => {
  var ret = new Object();
  ret.nums = [];
  ret.freq = [];
  for(i in arr){
    if (ret.nums.includes(i)){
      ret.nums[ret.nums.indexOf(i)]++;
    }
    else {
      ret.nums.push(i);
    }
  }
  return(ret);

};

module.exports = getFrequencies;

//FUCK IT WE'LL COME BACK TO THIS IN A BIT BECAUSE NOOO.
