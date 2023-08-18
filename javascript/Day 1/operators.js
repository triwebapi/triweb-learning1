var x = 10;
var y = 55;
var z = 300;
if (x>y){
    console.log("x is greater than y");
    //xz
    if(x>z){
        console.log("x is greater than all");
    }else{
        console.log("z is greater than all");
    }
}
else{
    console.log("y is greater than x");
    //yz
    if(y>z){
        console.log("y is greater than all");
    }else{
        console.log("z is greater than all");

    }
}
