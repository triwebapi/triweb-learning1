function PrintNumSeriesRecursion(num){
    if(num==0){
        return 0;
    }
    console.log(num);
    num--;
    PrintNumSeriesRecursion(num);
     
}
PrintNumSeriesRecursion(5);// when function call itself again and again this is called recursion.