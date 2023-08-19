//falsy values

if(false){
    console.log("in if 1");//control never reach here
}else{
    console.log("in else 1");
}

//undefined
let x;
if(x){
    console.log ("in if 2");//control never reach here
}else{
    console.log("in else 2");
}

//null
if(null){
    console.log ("in if 3");//control never reach here
}else{
    console.log("in else 3");
}

//0

if(0){
    console.log ("in if 4");//control never reach here
}else{
    console.log("in else 4");
}

//NaN

if(NaN){
    console.log ("in if 5");//control never reach here
}else{
    console.log("in else 5");
}

// the empty string("")

if(""){
    console.log ("in if 6");//control never reach here
}else{
    console.log("in else 6");
}


if(NaN==false){
    console.log ("it was falsy value not false");//control never reach here
}else{
    console.log("surprise");
}

if(0 === false){
    console.log ("it was falsy value not false");//control never reach here
}else{
    console.log("surprise");
}