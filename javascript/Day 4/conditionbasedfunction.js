//let decidefun = 'add';
let decidefun = 'subtract';
let getResult;
if(decidefun == 'add'){
    getResult = function(num1,num2){
        console.log(num1+num2);
    }
  
    
}else if(decidefun == 'subtract'){
    getResult = function(num1,num2){
        console.log(num1-num2);

    }
}

getResult(5,3);