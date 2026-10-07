//anonymous functions
//anonymous functions are functions that are defined without a name
//they are often used as arguments to other functions or as immediately invoked function expressions (IIFE)

let output = document.getElementById("par2");
let y = function(callback){
    output.innerHTML += "this is an anonymous function part 2"+"<br>";
    callback();
}

let x= function(callback){
    output.innerHTML += "this is an anonymous function"+"<br>";
    callback();
}
x(()=>{
    y(()=>{

        output.innerHTML+="end of callback";
    });

});

//IIFE
(function(){
    output.innerHTML += "<br>this is an IIFE";
})();


//call()--------------- method is used to call a function with a given this value and arguments provided individually.
//using call() to invoke a constructor function with a different this value
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Employee(name, age, salary) {
    Person.call(this, name, age); // call() method is used to call the Person constructor function with the Employee object as this value
    this.salary = salary; //child constructor function uses the parent constructor function to inherit properties and methods
}
output.innerHTML += "<br>Employee name and salary: "+new Employee("John", 30, 50000).name+": "+new Employee("John", 30, 50000).salary;


//apply()--------- method is used to call a function with a given this value and arguments provided as an array (or an array-like object).
//find the maximum value in an array using apply() method
let arr = [1, 2, 3];
let max = Math.max.apply(null, arr); // apply() method is used to call the Math.max() function with the arr array as arguments
output.innerHTML += "<br>Max value in array: "+max;

//merging two arrays using apply() method
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Array.prototype.push.apply(arr1, arr2);
output.innerHTML += "<br>Merged array: "+arr1;

//bind()--------- method is used to create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
//using bind() to create a new function with a different this value
let person ={name: "John", age: 30};
let getName = function(){
    return this.name;
}.bind(person); // bind() method is used to create a new function with the person object as this value
output.innerHTML += "<br>Person name using bind(): "+getName();
