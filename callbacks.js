// callbacks ---function passed to another function so that it can be called later.
//                handles  asynchronous operations.

//create 2 functions  hello and gooddbye
// pass the goodbye function into the hello function


hello(goodbye);

function hello(callback){
   console.log("hello");
   callback();
}
function goodbye(){
    console.log("goodbye")
}




sum(display,8,4);

function display(result){
    document.getElementById("myH1").textContent = result;
}
function sum(callback,x,y){
    let result = x+y;
    callback(result);
}


function fetchUser(callback){
    setTimeout(()=>{
        callback({id:1,name:"jane"})
    },1000);
}
fetchUser(user=>document.getElementById("myH1").textContent =user.name);


