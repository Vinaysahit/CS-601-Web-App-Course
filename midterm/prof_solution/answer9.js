// Declared functions
function say_hello(){
    console.log("Hello World!")
}

// Function expressions
let helloWorld = function (name){
    console.log(`hi ${name}`);
}

// Anonymous functions
addEventListener('click', function() {
    console.log("Hello World");
});

// Arrow functions (1)
let emptyParam = () => {
    console.log("Hello World");
}

// Arrow function with 1 parameter (2)
let oneParam = ele => {
    console.log(ele);
}

// Arrow function with N+1 parameters (3)
let mutliParam = (a,b,c) => {
    console.log(a,b,c);
}


// 5. Immediately Invoked Function Expressions (IIFE)
(function say_hello(){
    console.log("Hello World!")
})()
