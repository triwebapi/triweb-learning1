function Employee(name){
    this.department = "none";
    this.mobile = ''
}

function Manager(name){
    Employee.call(this)
    this.name = name;
}

 Manager.prototype = Object.create(Employee.prototype);
 Manager.prototype.constructor = Manager

let Danish = new Manager("Danish");
console.log(Danish);
console.log(Danish.__proto__);