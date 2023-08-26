function validate(name){
    return new Promise((resolve,reject)=>{
        if(name== "abcd"){
            resolve ("yes validated");
        }else{
            reject("not validated");
        }
    });
}

//console.log(validate("abcd")); // This is in wrap inside promise so take it out.
//Promise {<fulfilled>: 'yes validated'}

validate("danish")
.then((result)=>{
    console.log(result); // This is method to controll promise
})
.catch((err)=>{
    console.log(err)
})