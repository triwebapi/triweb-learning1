// switch statement is use to make multiple operation on a sigle variable.
let dayNum = 2;
switch(dayNum){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break; 
    case 4:
         console.log("Thursday");
        break; 
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("Enter number between 0-6");
        break;

        
}
console.log("out of switch1");


let leaveDay = 5;
switch(leaveDay){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("working Day");
        break;

    case 0:
    case 6:
        console.log("weekend");
        break;
    default:
        console.log("Enter number between 0-6");
        break;
}