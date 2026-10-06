/* let operation  = "+,-,/,*";
let x=45;
let y=45;
let result;


switch (operation) {
    case "+":
         result = x+y;
        console.log(result)
        break;
    case "*":
            result = x*y;
        console.log(result)
        break;
       
    case "/":
          result = x/y;
        console.log(result)
        break;
        
    case "-":
          result = x-y;
        console.log(result)
        break;
       

    default:
        console.log("invalid input")
        break;
}
console.log(result); */



//continue statement


/* for(let  i= 0;i<=5; i++){
    if(i%2==0)
        continue; //jumps the number 4
    console.log(i);
} */



//Break statement
/* for(let  i= 0;i<=5; i++){
    if(i%2===0)
        break; //jumps the number 4

    console.log(i);
} */

//for--of-- Loop = iterates over array elements
/* let fruits = ['apples','oranges','avacado'];
fruits.push('beans')
for(let fruit of fruits)console.log(fruit);
  */




//WHILE AND DO WHILE LOOP
/* let output = document.getElementById("myH1");

let counter = 0;


let box = document.querySelector("#myH1");
box.style.color = "blue";
box.style.fontSize = "20px";

let para = document.querySelector("#par");
para.style.color = "red";
para.style.fontSize = "20px";

let counter2 = 0;


function loop(){
    output.innerHTML = "starting of loop <br>";

while(counter<20){
    output.innerHTML += "counter is at: "+counter+"<br>";
    counter++;
}
output.innerHTML += "end of loop <br>";





   para.innerHTML = "starting of loop <br>";
do{
    para.innerHTML += "counter is at: "+counter2+"<br>";
    counter2++;
}while(counter2<20);

para.innerHTML += "end of loop <br>";
} */


//FOR LOOP

//PRINT FIRST 10 NUMBERS

/* 
function loop(){
    output.innerHTML = "starting of loop <br>";     
for(let i=0;i<10;i++){
    output.innerHTML += "counter is at: "+i+"<br>";
}
}

//for loop without  initialization and increment
//functions same as while loop
function loop2(){
    para.innerHTML = "starting of loop <br>";     
    let i=0;
    for(;i<10;){
        para.innerHTML += "counter is at: "+i+"<br>";
        i++;
    }
}
*/
let para = document.getElementById("par");


//conditional statements optional in for loop

let output = document.getElementById("myH1");
let array = [1,2,3,4,5,6,7,8,9,10];
let i=0;
 function loop(){
    document.querySelector("#myH1").style.color = "blue";
    document.querySelector("#myH1").style.fontSize = "20px";
    output.innerHTML = "starting of loop <br>";
    for(; ;i++){
        if(i>=array.length)break;
    
    output.innerHTML += "array["+i+"] ->"+ array[i]+"<br>";
    }
 }

//without iteration statement
let j=0;
function loop2(){
for(; ;){
    if(j>=array.length)break;
    document.querySelector("#par").style.color = "red";
    document.querySelector("#par").style.fontSize = "20px";
    para.innerHTML += "array["+j+"] ->"+ array[j]+"<br>";
    j++;
}
}















