let arr6 =['a','b','c','d'];
let arr7 =['1','2','3','4','5'];
// console.log('concat');
console.log(arr6.concat(arr7));

// if u want to return result in another array.

let arr8 = arr6.concat(arr7);
console.log(arr8);

//join 
console.log(".....................")
let str9 = arr6.join('');
console.log(str9);    // join() and split work on array to split and split to array.

// push()....... add one or more elemet to the end of an array and return the reulting length of an array.

//pop() ......remove the last element form an array and return the element.
// shift() .....remove the first element form an array and return that elemet.
// unshift().... add one or meore lement to the front of an array and return the new length of an array.
//slice().......slice (start_index, upto_index) extract a section of an array and return a new array.
//splice( index,count_to_remove,addElement1,addElement2,..)
//removes element from an array and replaces them. it return the item which were removed from the array.

//let arr 1 = arr.push('e');console.log("retrun from push",1);

// let elem = arr1.pop(); console.log("return from pop",elem);

//let elemShift = arr1.shift();console.log("return from shift",elemShift);

//let unShift = arr1.unshift("a");console.log("return from unshift",unShift);

//let arr =[1,2,3,4,5,6,7,8];
//let arr1 = arr.slice(1,4);  console.log(arr1); // 2,3,4 // slice copy character 

//let arr = [1,2,3,4,5,6,7,8,9];
//let arr1 = arr.splice(1,4);
//console.log(arr1); // splice cut the character



