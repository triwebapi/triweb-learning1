// function PrintNumSeriesRecursion(num){
//     if(num==0){
//         return 0;
//     }
//     console.log(num);
//     num--;
//     PrintNumSeriesRecursion(num);
     
// }
// PrintNumSeriesRecursion(5);// when function call itself again and again this is called recursion.


//method-2
// console.log("................");

// const printSeries = function PrintSeriesRecursion(num){
//     if(num==0){
//         return 0;
//     }
//     console.log(num);
//     num--;
//     PrintSeriesRecursion(num);
// }
// printSeries(5);

//method-3

console.log("..........................................");

const PrintSeries1 = function PrintSeriesRecursion1(num){
    if(num==0){
        return 0;
    }
    console.log(num);
    num--;
    PrintSeriesRecursion1(num);
}
PrintSeries1(5);