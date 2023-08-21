//in

let obj1 = {username:"Danish", mobile:9891};
if("username" in obj1){
    console.log(obj1.username);
}

//instance of 

function xyz(){
    this.x = 5;
}

let y3 = new xyz();
console.log(y3);
console.log(obj1 instanceof xyz);
console.log(y3 instanceof xyz);//instanceof is use to find a type of object.