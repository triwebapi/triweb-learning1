function addNumber(){
    let sum = 0;
    let arr = Array.from(arguments);
    arr.forEach(element =>{
        sum = sum+element;

    });
    console.log(sum);
}
