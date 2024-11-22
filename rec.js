//1.Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. 
//Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
function fibs(num) {
    let fib = [0, 1]

    if (num <= 1){
        fib = num;
    }
  
    for(let i = 2; i < num; i++){
        const a = fib[i - 1];
        const b = fib[i - 2];
        
        fib.push(a + b)
    }
    console.log(fib);
    }

fibs(8)



