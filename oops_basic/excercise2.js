class ArrayUtils {
    constructor() {
        // To avoid the instantiate the class we need to call a function in constructor. 
        throw new Error('ArrayUtils cannot be instantiated.')
    }
    static average(arr) {
        console.log('arrayNumbers', arr);
        let sumOfNumbs = 0;
        let avgOfNumber = 0;
        if (arr.length === 0) {
            throw new Error('Array cannot be empty.')
        }
        for (let x in arr) {
            // console.log('===', arr[x]);
            sumOfNumbs += arr[x]

        }
        avgOfNumber = sumOfNumbs / (arr.length)
        // console.log('avgOfNumber',avgOfNumber);
        return avgOfNumber;
    }
    static max(arr) {
        let largest = arr[0];
        for (let x in arr) {
            if (arr[x] > largest) {
                largest = arr[x]
            }
        }
        console.log('larget value', largest);
        return largest
    }
    static asendingArray(arr) {

        for (let i = 0; i <= arr.length - 1; i++) {
            for (let j = 0; j < (arr.length - i); j++) {
                if (arr[j] > arr[j + 1]) {
                    let requestSwap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = requestSwap;
                }
            }
        }
        return arr[arr.length-1]
    }
}
// let myArray = new ArrayUtils();
console.log('static method call', ArrayUtils.asendingArray([34, 33, -3, 3,3, 56]));