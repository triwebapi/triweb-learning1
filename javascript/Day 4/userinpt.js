// function add(n1,n2){
//     console.log(n1+n2);
// }
// let x = parseInt(prompt("enter your number"));
// let y = parseInt(prompt("enter your number"));
// add(x,y);



//user input using input box..............
function add(n1,n2){
    console.log(n1+n2);
}
function btnListener(){
    console.log("anything");
    console.log(document.getElementById('num1').value);
    let x =parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    add(x,y);
}
let btn=document.getElementById('add');
btn.addEventListener('click',btnListener);