let lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lengthLower = lowercaseArr.length;

export function caesarCipher(string, key) {
    let newLower = mapArr(key, lowercaseArr);
    let newUpper = mapArr(key, uppercaseArr);

    let output = '';
    let splitString = string.split('');
    splitString.forEach((item) => {
        if (/[a-z]/.test(item)) {
            let index = Number(lowercaseArr.indexOf(item));
            output += newLower[index]; 
        } else if (/[A-Z]/.test(item)) {
            let index = Number(uppercaseArr.indexOf(item));
            output += newUpper[index]; 
        } else {
            output += item;
        }
    })
    
    return output;
}

function mapArr(key, arr) {
    let cipherArr = [];
    arr.map((item, index, arr) => {
        let newIndex;
        if (index - key < 0) {
            newIndex = index - key + lengthLower;
        } else {
            newIndex = index - key;
        }

        cipherArr[newIndex] = item;
    });
    // console.log(cipherArr)
    return cipherArr;
}

caesarCipher('abc', 3);