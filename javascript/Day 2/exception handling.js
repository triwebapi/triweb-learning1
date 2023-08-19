try{
    console.log(x);//reference error || undefinds
    console.log("working");
}
catch(error){
    //email to developer
    //log error
    console.log("server is under maintanance");
}finally{
    console.log("inside finally block");
     "from finally";//over write the previous return
}