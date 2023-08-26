function Student(name,age){
    this.name = name;
    this.age = age;

}

let Student1 = new Student("kiwi",2);
console.log(Student1);
console.log(Student1.__proto__); //{} object
console.log(Student1.prototype); // undefined
Student1.__proto__display =function(){
    console.log(`Hi ${this.name}`);
}

Student1.display();



let Student2 = new Student("salman",28);
console.log(Student2);

Student2.display();