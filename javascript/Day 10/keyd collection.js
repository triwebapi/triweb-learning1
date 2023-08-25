//map and object contain element which are iterable in the order of insertion.
//maps(ecmascript introduce in 2015 and introduce a new data structure to map values to values).
//map object maintain insertion order.


let newMap = new Map();
newMap.set("name","danish");
console.log(newMap);

newMap.set("address","Bulandshahr");
console.log(newMap);

newMap.set("mobile","9891");
console.log(newMap);

// now here i will get value 

const studentName = newMap.get('name');
console.log("name from map is",studentName); // map also maintain  its size. and array had length.
console.log("number of element is Map=",newMap.size);//number of element is Map= 3

newMap.set(1,"Raju");
console.log(newMap);


let valOf1 = newMap.get(1);
console.log("val of 1 is",valOf1);

//weak map ..

let wMap = new WeakMap();
obj1 = {}
obj2 ={1:1}
obj3 ={2:2}
wMap.set(obj1,"val1");
wMap.set(obj2,"val2");
wMap.set(obj3,"val3");
console.log(wMap);
let v1 =wMap.get(obj1);
console.log(v1);