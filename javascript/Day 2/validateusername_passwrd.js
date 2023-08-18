function validateUser(name, password){
    if(name == ""){
        console.log("invalid user name");
        return;
    }else if(password == "" || password.length<8){
        console.log("invalid password");
        return;
    }
    console.log("yes succesfully validated");
    
}
let username = "Danish";
let userpassword = "abcd12356";
validateUser(username,userpassword);