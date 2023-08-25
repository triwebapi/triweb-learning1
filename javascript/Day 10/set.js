//A value in a set may occur only once.& it is unique in the set collection.
let newSet = new Set()
newSet.add(34);
newSet.add(44);
newSet.add(54);
newSet.add(64);

newSet.add(64); //it will not add because it is unique.
// newSet.delete(64); 
if(newSet.has(64)){
    console.log("is method is working");
}
console.log(newSet);
console.log("size of new set is ",newSet.size);

for(const element of newSet){
    console.log("element:",element);
}
