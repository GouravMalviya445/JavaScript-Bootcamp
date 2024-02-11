
// const reqUrl = 'https://api.github.com/users/hiteshchoudhary'
// const xhr = new XMLHttpRequest();
// xhr.open('GET',reqUrl);
// let data;
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         data = JSON.parse(this.responseText);
//         console.log(data["avatar_url"])
//     }
// }
// xhr.send();
// document.querySelector("#click").addEventListener("click",()=>{
//     let div = document.createElement("div")
//     let h1 = document.createElement("h1")
//     let img = document.createElement("img")
//     h1.innerHTML = `${data["followers"]}`
//     div.setAttribute("class","card")
//     img.setAttribute("src",`${data.avatar_url}`)
//     div.appendChild(img)
//     div.appendChild(h1)
//     document.body.appendChild(div)
// })  


// const requestUrl = 'https://api.github.com/users/GouravMalviya445'
// const xhr = new XMLHttpRequest();
// xhr.open('GET',requestUrl);
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         let data = JSON.parse(this.responseText)        
//         console.log(data.avatar_url)
//     }
// }
// xhr.send();
