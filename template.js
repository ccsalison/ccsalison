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


console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
// expected output: "☃★♲你"

console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="

var icons = '☃★♲';
console.log(icons.codePointAt(1));
// expected output: "9733"

var icons = 'ABC';
console.log(icons.codePointAt(2));
// expected output: "67"
