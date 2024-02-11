// singleton 
// const obj = new Object();

// const obj1 = {1: "a", 2:"b"}
// const obj2 = {3: "c", 4:"d"}

// merging of objects:
// const merge = Object.assign({},obj1,obj2)  // using assign function
// const merge = {...obj1,...obj2}; // using dot opt
// console.log(merge)

// let x = {};
// console.log(x?.name?.surname)

let CreateObj = function(){
    this.name = "Gourav";
    this.age = 19;
    this.class = "BCA 1st";
    this.data = function(){
        return `${this.name} ${this.age} ${this.class}`;
    }
}

let obj1 = new CreateObj();
console.log(obj1.data())

