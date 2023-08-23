const str3 = String("hi I am here");
const firstChar = str3.charAt(0);
console.log("first char is ",firstChar);
console.log("first char is ",str[0]);



const indexOfI = str3.indexOf('I');
console.log("index of I is",indexOfI);

const indexOfi = str3.indexOf('i');
console.log("index of i is ",indexOfi);

const indexOfe = str3.indexOf('e');
console.log("index of e is",indexOfe);


const indexOflaste = str3.lastIndexOf('e');
console.log("index Of laste e  is",indexOflaste);

//startsWith

if(str3.startsWith('h')){
    console.log("yes string starts with h");
}else{
    console.log("no it does not start with h");
}
//endsWith

if(str3.endsWith("e")){
    console.log("yes string end with e");
}else{
    console.log("ni it does not end  with e");
}

//includes  str.include

//concat
// const str1 = "i am going";
// const str2 = "okay u can go";
// str3 = str1+str2;
// console.log(str3)

// here concat with function

// const str3 = str.concat(str1);
// console.log(str3);

