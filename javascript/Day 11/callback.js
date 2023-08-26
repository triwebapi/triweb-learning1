//before promise

function failure(err){
    console.log("Failed: ",err)
}

function success(result){
    console.log("success: ",result)
}


function validate(name,yesSuccess,noError){
    if(name == "abcd"){
        yesSuccess("name is  validated");
    }else{
        noError("not matched");
    }
}
validate("abcd",success,failure);
