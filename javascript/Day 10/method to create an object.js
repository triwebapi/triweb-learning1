let objInit = {name:"Danish",address:"india"}
console.log(objInit);


function employ (name, designation, salary,age){
    this.name = name;                  // this always point current object
    this.address = designation;
    this.payment = salary;
    this.age = age;
}
let objFn = new employ("Danish","software engineer",0,30);
console.log(objFn); // here objFn is this... And to make object from any function write,(new create a memory 
//and create object)

// for change address and name .

let obj4 = {name:'Danish',address:'India'}
let obj5 = obj4;
obj4.name = "Salman";
obj4.address = "england";
console.log("obj4",obj4);
console.log("obj5",obj5);

// create object
// let objA = {name:'Danish',address:'India'}
// let objB = Object.create(objA);

// console.log("objA",objA);//{name: 'Danish', address: 'India'}
// console.log("objB",objB);//{}

let objA ={
    name:"Danish",
    Country:"India",
    display:function(){
        console.log(`${this.name} live in ${this.Country}`);
    }
}

objA.display();
let objB = Object.create(objA);
objB.name = "Danish";
objB.country = "India";
console.log(objA);
console.log(objB);
objB.display();
