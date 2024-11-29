//1.Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. 
//An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let resultArr = [],
    leftIndex = 0,
    rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(right[rightIndex]);
            rightIndex++
        }
    }

    return resultArr
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))