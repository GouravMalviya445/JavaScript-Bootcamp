// let arr = ["Gourav", "Ganesh", "Kartik"]
// const ans = arr.forEach((value)=> {
//     console.log(value)
//     return value
// })
// console.log(ans)


// Filter: 
// let numbers = [1,2,3,4,5,6]
// let ans = numbers.filter((val)=>val<4);
// console.log(ans)

// let nums = [2,3,4,5,6,5,4,3,2,1]
// const output = nums.filter(function(val){
//     return val % 2 === 0;
// })
// console.log(output)

// let students = [
//     {
//         name: "Gourav",
//         age: 19,
//         courseName: "BCA",
//         year: "1st year"
//     },
//     {
//         name: "Kirtan",
//         age: 20,
//         courseName: "BSC CS",
//         year: "2st year"
//     },
//     {
//         name: "Yashwant",
//         age: 21,
//         courseName: "BA",
//         year: "3st year"
//     },
//     {
//         name: "Khushi",
//         age: 18,
//         courseName: "BCA",
//         year: "2st year"
//     }
// ]

// const ans = students.filter(function(value){
//     return value.age<20 && value.courseName === "BCA"
// })

// const ans = students.filter((data)=>(data.age>19 && data.year === "2st year"))
// console.log(ans)



// Map : 
// let myNums = [1,2,3,4,5,6,7,8,9,10]
// let ans = myNums.map(function(num){
//     return num+40;
// })
// console.log(ans)
// Chaining : 
// let ans = myNums.map((num) => num*10)
// .map((num) => num+100)
// .map((num) => num-50)
// .filter((num) => num>100)
// console.log(ans)
// let number = [5,4,3,2,1,5]
// const output = number.map((val)=>(val.toString(2)))
// console.log(output)

// Reduse :
// let myNum = [1,2,3]
// let ans = myNum.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal;
// },0)
// console.log(ans)

// let cart = [
//     {
//         item: "T-Shirt",
//         price: 400
//     },
//     {
//         item: "Huidy",
//         price: 500
//     },
//     {
//         item: "Jience",
//         price: 700
//     },
//     {
//         item: "Cargo",
//         price: 900
//     },
//     {
//         item: "Shirt",
//         price: 700
//     }
// ]

// const ans = cart.reduce((acc, item) => (acc + item.price),0)
// console.log(ans)

// 😎
// let price = 0;
// cart.forEach(function(val){
//     price = price + val.price;
// })
// console.log(price)