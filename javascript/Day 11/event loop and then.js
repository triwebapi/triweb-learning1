function validateUser(name){
    return new Promise((resolve,reject)=>{
        if(name== "abcd"){
            resolve ("yes validated user");
        }else{
            reject(" invalid user");
        }
    });
}

validateUser("danish")
.then((status)=>{
    console.log("event loop after round 1"); // This is method to controll promise
    console.log(status);
})
.catch((err)=>{
    console.log(err);
})
console.log("event loop after round 1");