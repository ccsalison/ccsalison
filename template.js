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

//****************
//*  FizzBuzz    *
//****************

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from({length: n}, (v, i) => {
        i++;
        if (i % 15 === 0 ) return "FizzBuzz";
        if (i % 5 === 0 ) return "Buzz";
        if (i % 3 === 0 ) return "Fizz";
        return i.toString();
    });
};


//************
//*   BST    *
//************
insert(data) 
{ 
    // Creating a node and initailising  
    // with data  
    var newNode = new Node(data); 
                      
    // root is null then node will 
    // be added to the tree and made root. 
    if(this.root === null) 
        this.root = newNode; 
    else
  
        // find the correct position in the  
        // tree and add the node 
        this.insertNode(this.root, newNode); 
} 
  
// Method to insert a node in a tree 
// it moves over the tree to find the location 
// to insert a node with a given data  
insertNode(node, newNode) 
{ 
    // if the data is less than the node 
    // data move left of the tree  
    if(newNode.data < node.data) 
    { 
        // if left is null insert node here 
        if(node.left === null) 
            node.left = newNode; 
        else
  
            // if left is not null recurr until  
            // null is found 
            this.insertNode(node.left, newNode);  
    } 
  
    // if the data is more than the node 
    // data move right of the tree  
    else
    { 
        // if right is null insert node here 
        if(node.right === null) 
            node.right = newNode; 
        else
  
            // if right is not null recurr until  
            // null is found 
            this.insertNode(node.right,newNode); 
    } 
} 

//************
// FIND NODE
//************

// search for a node with given data 
search(node, data) 
{ 
   // if trees is empty return null 
    if(node === null) 
        return null; 
  
    // if data is less than node's data 
    // move left 
    else if(data < node.data) 
        return this.search(node.left, data); 
  
    // if data is less than node's data 
    // move left 
    else if(data > node.data) 
        return this.search(node.right, data); 
  
    // if data is equal to the node data  
    // return node 
    else
        return node; 
} 
