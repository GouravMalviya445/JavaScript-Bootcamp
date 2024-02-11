// IIFE : Imediately Invoke Funtion Expression

// syntax: (function-declaration)(function-calling)
(function chai(value){
    // Named IIFE with Perameters
    console.log(`DB Connected with ${value}`);
})("Server 1");

((value)=>{
    // arrow with Perameters
    console.log(`DB Connected with ${value}`);
})("Server 2");


