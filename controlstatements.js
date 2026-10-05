let operation  = "*";
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
console.log(result);