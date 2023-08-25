let obj ={name:"Danish",address:"India",mobile:"9891"}
console.log(obj);

console.log("............");

let obj1 = new Object()//object constructor
obj1.name = "Danish";
obj1.address = "india";
obj1.mobile = "9891";
console.log(obj1);
// console.log(obj.email).  undefined
obj.alternateMobile = null;
console.log(obj.alternateMobile); // null variable which has been assigned as null Contain no value.

                                // UNDEFINED variable has been declared ,but its value not assigned.
// dot notation

console.log("Dot notation", obj.mobile);

// bracket notation
console.log("bracket notation",obj['mobile']);

// here if i want to make a key.
const x ="123";
obj.x = "hi";
console.log(obj);

const x1 = "123";
obj[x1] = "h1";
console.log("...........");
console.log("x=",obj[x1]);
console.log(obj);