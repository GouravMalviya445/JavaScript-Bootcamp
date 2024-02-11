let date = new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString());
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds())
// console.log(date.getTime())


// let createDate = new Date('August 5, 2008 12:30:00')
// console.log(createDate.toString())
// console.log(createDate.toLocaleString()) // 21/8/2005
// let newDate = createDate.setDate(24)
// console.log(createDate.getDate())

// let timeStamp = Date.now();
// console.log(timeStamp)
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let createDate = new Date();
// console.log(`Today's date is ${createDate.toLocaleDateString()} and time is ${createDate.toLocaleTimeString()}`)


let tell = createDate.toLocaleString('default',{
    month:"numeric",
    day: "numeric",
    year: "numeric",
    hour:"numeric",
    minute: "2-digit"
})

console.log(tell)

