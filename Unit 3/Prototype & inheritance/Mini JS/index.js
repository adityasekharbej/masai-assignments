//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

function objectMakers(d1, d2, d3, d4, d5) {
    this.data1 = d1;
    this.data2 = d2;
    this.data3 = d3;
    this.data4 = d4;
    this.data5 = d5;
};


let scopeObj = new objectMakers( 
    "Scope in JS refers to current context of code ",
    "There are two types of scope -1. Global scope 2.Local Scope",
    "Global variables are declared outside of a block",
    "Local variables are those declared inside a block",
    "var is used for Global and let is used for local",
    "Scopes are very useful"
);

localStorage.setItem("scope", JSON.stringify(scopeObj));

let hoistingObj = new objectMakers( 
    "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.",
    "Hoisting allows functions to be safely used in code before they are declared.",
    "Variable and class declarations are also hoisted, so they too can be referenced before they are declared. ",
    "One of the advantages of hoisting is that it lets you use a function before you declare it in your code.",
    "Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized."
)
localStorage.setItem("hoisting", JSON.stringify(hoistingObj))
    
let constructorObj = new objectMakers(
    "The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically",
    "Function objects created with the Function constructor are parsed when the function is created",
    "Invoking the Function constructor as a function (without using the new operator) has the same effect as invoking it as a constructor.",
    "the Function constructor creates functions which execute in the global scope only.",
    "As the parameters are parsed in the same way as function declarations, whitespace and comments are accepted"
)
localStorage.setItem("constructor", JSON.stringify(constructorObj))


let prototypeObj = new objectMakers(
    "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
    "Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.",
    "map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results.",
    "It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments",
    "A new array with each element being the result of the callback function."
)
localStorage.setItem("prototype", JSON.stringify(prototypeObj))

function display(elem){
    document.getElementById("info").innerText = "";
    let line1 = document.createElement("li")
    line1.innerText = elem.data1
    let line2 = document.createElement("li")
    line2.innerText = elem.data2
    let line3 = document.createElement("li")
    line3.innerText = elem.data3
    let line4 = document.createElement("li")
    line4.innerText = elem.data4
    let line5 = document.createElement("li")
    line5.innerText = elem.data5

    document.getElementById("info").append(line1, line2, line3, line4, line5)

}

document.getElementById("scope").addEventListener("click", function(){
    display(JSON.parse(localStorage.getItem("scope")));
})

document.getElementById("hoisting").addEventListener("click", function(){
    display(JSON.parse(localStorage.getItem("hoisting")));

})

document.getElementById("constructor").addEventListener("click", function(){
    display(JSON.parse(localStorage.getItem("constructor")));

})

document.getElementById("prototype").addEventListener("click", function(){
    display(JSON.parse(localStorage.getItem("prototype")));

})