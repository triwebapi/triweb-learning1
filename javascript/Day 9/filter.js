let arr13 = [1,2,3,4];
let arrFilter = arr13.filter((element)=>element%2==0);
console.log(arrFilter)


//every .....says return true if callback returns true for every item in the array.


let arr14 = [1,3,5,7,9];
let status1 = arr14.every((element)=>element%2!=0);
console.log(status1);



// some....... says return true if callback returns true for atleast one item in the array.

let arr15 = [1,3,4,7,9];
let status2 = arr15.some((element)=>element%2==0);
console.log(status2);

// Reduce..........reducing the list of item down to a single value.
let a = [10,20,30];
let total = a.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},0)
console.log(total);