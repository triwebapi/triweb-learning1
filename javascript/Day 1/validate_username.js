var username = prompt("Enter Your Name");
var h1tag = document.querySelector('h1');

function setUserName(userName){
    if(userName == null || userName.length == 0){
        alert("Please Enter Your Name");
    }else{
        h1tag.textContent = userName;
    }
}
setUserName(username);