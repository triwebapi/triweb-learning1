// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumber(2,3);


function addnumber(){           //arguments
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum = sum +element;
        
    }
    console.log(sum);

}
addnumber(2,3,4,5);
addnumber(2,3);
addnumber(1,2,3,4,5,6,7,8,9,);