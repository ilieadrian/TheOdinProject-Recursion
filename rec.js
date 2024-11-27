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
    return fib;
    }

console.log(fibs(8))

function fibsRec(num) {
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let fib = fibsRec(num - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
}

console.log(fibsRec(8)); 


