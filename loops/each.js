const coding = ["java", "pbython", "ruby" ,"cpp"];
coding.forEach((value)=>{
    // console.log(value)
})

coding.forEach((value, index, arr) => {
    // console.log(`${value} ${index} ${arr}`)
})


let myCoding = [
    {
        language: "Java",
        extension: ".java"
    },
    {
        language: "Phython",
        extension: ".py"
    },
    {
        language: "C++",
        extension: ".cpp"
    },
    {
        language: "Rust",
        extension: ".rs"
    },
    {
        language: "Java Script",
        extension: ".js"
    }
]

// Accessing the objects key in the array :
// myCoding.forEach((value)=>{
//     console.log(value.language)
// })

// Accessing the objects in the array :
// myCoding.forEach((value)=>{
//     for (const key in value) {
//         console.log(`${key} ${value[key]}`);
//     }
//     console.log();
// })