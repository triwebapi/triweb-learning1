let obj7 ={
    name:"Danish",
    display:function(salary){
        console.log(`${this.name}earning ${salary} rupees`);
    },

    printAge(age){
        console.log(`${this.name} is ${age} year old`);

    }
}

obj7.display(10);

obj7.printAge(30);

