function Outer(num){
    let  x = 5;
    function Inner (x){
        let num = 8;
        console.log(x);
        console.log(num);
    }
    Inner(7);
}
Outer(3);
