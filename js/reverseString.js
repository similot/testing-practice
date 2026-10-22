export function reverseString(str) {
    let arr = [...str];
    let rev = arr.reverse().join('');
    return rev;
}