// where callbacks are nested in other callbacks until code becomes unreadable.

 
function task1(callback){
    setTimeout(()=>{
       document.getElementById("myH1").textContent="Task 1 complete";
        callback();
    },3000);
}
function task2(callback){
    setTimeout(()=>{
        document.getElementById("myH1").textContent="Task 2 complete";
        callback();
    },1500);
}
function task3(callback){
    setTimeout(()=>{
        document.getElementById("myH1").textContent="Task 3 complete";
        callback();
    },1000);
}
function task4(callback){
    setTimeout(()=>{
       document.getElementById("myH1").textContent="Task 4 complete";
        callback();
    },2000);
}
task4();

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                  document.getElementById("myH1").textContent = "Tasks done";
            });
        })
    })
});
