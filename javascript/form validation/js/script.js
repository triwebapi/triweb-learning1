function Validation(){
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var age = document.getElementById('age').value;

    if(name1 ==""){
        document.getElementById('name11').innerHTML="*Please Enter your Name*";
        return false;
            
    }
        if(name1.lenght<2){
            document.getElementById('name11').innerHTML="*Please write more than one character*";
            return false;
        }
    if(name2 ==""){
        document.getElementById('name21').innerHTML="*Please Enter your  Last Name*";
    }
    if(email ==""){
        document.getElementById('email1').innerHTML="*Please Enter your email*";
    }
    if( contact==""){
        document.getElementById('contact1').innerHTML="*Please Enter your contact number*";
    }
    if( age==""){
        document.getElementById('age1').innerHTML="*Please Enter your Name*";
    }
    
}