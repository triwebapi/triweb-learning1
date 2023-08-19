function UpdateName(student){
    student.name = "Hi" + student.name;
    console.log(student);
}

let objs = {name: "Danish"};
UpdateName(objs);
console.log("old object is ",objs);