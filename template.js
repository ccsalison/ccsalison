for(var i = 0; i<myarr.length;i++){}

var n = num.toString();

// concatenating arrays
elements.join('') 

var s_arr = [...s]

parseInt(Value, radix)

var containsDuplicate = function(nums) {
    const myset = new Set();
    for(var i=0;i<nums.length;i++){
      if(!(myset.has(nums[i]))){
        myset.add(nums[i])
      }else{return true}
    }

    if (nums.length == myset.size){return false}
    else return true
};
