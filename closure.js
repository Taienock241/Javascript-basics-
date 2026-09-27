//closure tutorial -- a function defined inside another function

   //         inner function has access to variables and scope of  outer function.
//            --allows for private ariables and state management.


//counter varibale example

let counter = 0;
 counter  = 4;   //PROBLEM!!!!??  DATA IS NOT KEPT SECURE---MODIFIED.

  function count(){
          ++counter;
          console.log(counter);
  }
  count();
  count();
  count();

//the count function innitializes a count function which is incremented by inner function(privatised)
  function counT(){
    let counTer = 0;
       function inner(){
        ++counTer;
        console.log(counTer);
    }
    function getCount(){
        console.log(`current counter is ${counTer}`);
    }
       return{inner,getCount};
  }
  let value = counT();
       value.inner();
       value.inner();
       value.inner();
   // console.log(value.counTer);  //undefined  data is kept private
   value.getCount();


       