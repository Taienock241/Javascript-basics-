// for in loop is used to iterate over the properties of an object. It allows you to access each property name (key) in the object.
// syntax: for (variable in object) { // code block to be executed }

let obj = {name: "John", age: 30, city: "New York"};
let output = document.getElementById("myH1");
function loop(){
    document.querySelector("#myH1").style.color = "blue";
    document.querySelector("#myH1").style.fontSize = "20px";
    output.innerHTML = "START OF LOOP <br>";
    for(let key in obj){
        output.innerHTML += key+" - "+ obj[key]+"<br>";
    }
}

let salaries = {John: 50000, Jane: 60000, Bob: 70000};
function loop2(){
    document.querySelector("#par").style.color = "red";
    document.querySelector("#par").style.fontSize = "20px";
    let para = document.getElementById("par");
    para.innerHTML = "START OF LOOP <br>";
    //for loop nested in for in loop
    for(let key in salaries){
        para.innerHTML += `key : ${key} <br>`;
        for(let i = 1; i < 4; i++){
            para.innerHTML += `value multiplied by ${i} = ${salaries[key]*i}<br>`;
        }

    }
}