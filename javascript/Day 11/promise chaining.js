function returnUser(){
    return new Promise((resolve,reject)=>{
        resolve({name:"Danish"});
    });
}

returnUser()
    .then((userData)=>{
        return userData.name;
    })
    .then((userName)=>{
        console.log("HI",userName);
    })
    .catch((err)=>{
        console.log(err);
    })