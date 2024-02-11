const container = document.querySelector(".container");
const pink = document.querySelector(".pink");
const white = document.querySelector(".white");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");


function changeBGIntoPink(){
    let click = 1;
    pink.addEventListener("click",()=>{
        if(click == 1){
            container.style.backgroundColor = "#ff05af";
            click++;
        }
        else{
            container.style.backgroundColor = "#212121";
            click--;
        }
    })
}

function changeBGIntoWhite(){
    let click = 1;
    white.addEventListener("click",()=>{
        if(click == 1){
            container.style.backgroundColor = "#fff";
            click++;
        }
        else{
            container.style.backgroundColor = "#212121";
            click--;
        }
    })
}

function changeBGIntoBlue(){
    let click = 1;
    blue.addEventListener("click",()=>{
        if(click == 1){
            container.style.backgroundColor = "#0000ff";
            click++;
        }
        else{
            container.style.backgroundColor = "#212121";
            click--;
        }
    })
}

function changeBGIntoYellow(){
    let click = 1;
    yellow.addEventListener("click",()=>{
        if(click == 1){
            container.style.backgroundColor = "#ffff00";
            click++;
        }
        else{
            container.style.backgroundColor = "#212121";
            click--;
        }
    })
}

changeBGIntoPink();
changeBGIntoWhite();
changeBGIntoBlue();
changeBGIntoYellow();