let obj8 = {
    age:30,

    get a(){
        return this.age;
    },
    set b(newAge){
        age = newAge
    }

}
console.log(obj8.a);
obj.b = 40;
console.log(obj8.a);