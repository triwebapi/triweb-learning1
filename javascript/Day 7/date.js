let date = "2023 08 21 4:31:20"
console.log(date);


let dateobj = new Date(date);
console.log("Month",dateobj.getMonth());
console.log("FullYear",dateobj.getFullYear());
console.log("Date",dateobj.getDate());
console.log("time",dateobj.getTime());
console.log("hour",dateobj.getHours());