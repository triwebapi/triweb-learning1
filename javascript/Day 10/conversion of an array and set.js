// array to set

let arr =[1,2,3,3,4,4,5]
console.log(arr);

let setFromArray = new Set(arr);
console.log(setFromArray); // Here set remove duplicate Array.
//(7) [1, 2, 3, 3, 4, 4, 5]
//conversion of an array and set.js:5 Set(5) {1, 2, 3, 4, 5}


// set to array
let arrayFromSet = Array.from(setFromArray);
arrayFromSet.push(3);
console.log("array from set",arrayFromSet); //array support duplicate element.
//array from set (6) [1, 2, 3, 4, 5, 3]



// using spread operator

let arrFromSetUsingSpreadOperator = [...setFromArray];
arrFromSetUsingSpreadOperator.push(3);
console.log(arrFromSetUsingSpreadOperator);

