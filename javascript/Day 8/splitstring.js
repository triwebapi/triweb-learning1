const cities = String("Gazipur, Varansi, New elhi,Lucknow");
const cityArr = cities.split(',');

console.log(cityArr);

cityArr.forEach((city)=>{
    console.log("Hi it is",city);  // split break 
});