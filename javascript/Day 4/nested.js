function square3(num){
    function getsquare(n1){
        function getSquareFromInside(n2){
            console.log(n2*n2);
        }
        getSquareFromInside(n1);
    }
    getsquare(num);
}
square3(5);