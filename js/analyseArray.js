export function analyseArray(arr) {
    let average = arr.reduce((sum, current) => sum + current, 0) / arr.length;

    let min = arr[0];
    arr.forEach((item) => min = item > min ? min : item );

    let max = arr[0];
    arr.forEach((item) => max = item < max ? max : item );
    
    let length = arr.length;

    return { average, min, max, length }
}