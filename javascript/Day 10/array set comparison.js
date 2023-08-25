let mySet =  new Set([2,3,4,5]);
mySet.delete(3);   // delete of an element by its value
console.log(mySet);


let myArray = [2,3,4,5];
//myArray.delete(2);// myArray.delete is not a function

myArray.splice(myArray.indexOf(3),1);
console.log(myArray);