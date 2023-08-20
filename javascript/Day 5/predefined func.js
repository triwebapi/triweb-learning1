let a = "1+2";
//console.log(a);
console.log(eval(a));

let b = "1+2*7";
console.log(eval(a));


let c = "1";
console.log(parseInt(c)+2);

// deafault arguments

function multiply(num1,num2=1){
    console.log(num1*num2);
}
multiply(2,3);
multiply(2);
