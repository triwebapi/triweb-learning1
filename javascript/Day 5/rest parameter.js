function MultipleArguments(multiplier,...arg){
    arg.forEach((elem)=>{
        console.log(multiplier*elem);
    });
}

console.log("............");
MultipleArguments(2,4,5);
console.log("............");
MultipleArguments(2,4,5,6);
console.log("............");
MultipleArguments(2,4,5,6,8,10);
