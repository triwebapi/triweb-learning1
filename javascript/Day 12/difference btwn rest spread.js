function printData(...rest){
    console.log(rest);
}

printData(1,2,3,4,5,6,7);



// here i want start loop

function printData1(...rest){ // here rest is variable so you can write anything
    rest.forEach((elem)=>{
        console.log("you want :",elem);
    })
}
printData1(1,2,3,4,5,6,7,8,9,10);




//  spread operator (here i want to know first element)

function printData2(...rest){
    rest.forEach((elem)=>{
        console.log("you sent :",elem);
    })
    const[firstElement] = [...rest];
    console.log("first Element:", firstElement);
}
printData1(1,2,3,4,5,6,7,8,9,10);



