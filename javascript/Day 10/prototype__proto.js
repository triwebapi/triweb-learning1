let obj6 = {name:"Danish",address:"india"};
obj6.prototype.designation = "Software eng";
console.log(obj6.prototype);// undefined because here on static object does not call prototype.
console.log(obj6.__proto__);// null prototype.{}








