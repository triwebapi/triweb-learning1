function getDigitaltime(){
    let dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    return hours+":"+minutes+":"+seconds;

}
console.log(getDigitaltime());