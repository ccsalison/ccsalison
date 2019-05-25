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

var months = ['Jan', 'March', 'April', 'June'];
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
