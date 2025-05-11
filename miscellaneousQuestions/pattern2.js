// write a program to print the bellow descending and ascending order of number in form of triangle. 

// 10                               10 9 8 7 6 5 4 3 2 1
// 10 9                             10 9 8 7 6 5 4 3 2
// 10 9 8                  and      .
// .                                .     
// .                                10 9
// 10 9 8 7 6 5 4 3 2 1             10 

// LeftHalfTriangle
//                   10
//                 10 9
//               10 9 8             and       
//        .
//       .
//      .
//     10........2 1 0
// InvertedLeftHalfTriangle

//     10 9 8 ......
//                 .
//                 .
//           10 9 8
//             10 9
//               10

let rowNumber = 10;

class NumberTrianglePattern {
    constructor(rowNumber) {
        this.rowNumber = rowNumber
    }
    getRightHalfTriangle() {
        let result = "";
        for (let i = 0; i <= this.rowNumber; i++) {
            let numTriangle = " ";
            for (let j = this.rowNumber; j >= (this.rowNumber - i); j--) {

                numTriangle += j + " "
            }
            result += numTriangle + "\n"
        }
        return result;
    }
    getInvertedRHTrianlge() {
        let result = "";

        for (let i = this.rowNumber; i >= 0; i--) {
            let numTriangle = " ";
            for (let j = this.rowNumber; j >= (this.rowNumber - i); j--) {
                numTriangle += " " + j
            }
            result += numTriangle + "\n"
        }
        return result;
    }
    getLeftHalfTriangle() {
        let result = "";
        for (let i = 0; i <= this.rowNumber; i++) {
            let numTriangle = "";
            for (let j = 1; j < (this.rowNumber - i )*2; j++) {
                numTriangle += " ";
            }
            for (let k = this.rowNumber; k >= (this.rowNumber - i); k--) {
                numTriangle +=  k + " " ;
                // console.log('num',numTriangle);
            }
            result += numTriangle + "\n";
        }
        return result
    }
    getFullTriangle() {
        let result = "";
        for (let i = 0; i <= this.rowNumber; i++) {
            let numTriangle = "";
            for (let j = 0; j <= (this.rowNumber - i); j++) {
                numTriangle += " ";
            }
            for (let k = this.rowNumber; k >= (this.rowNumber - i); k--) {
                numTriangle += " " + k;
                // console.log('num',numTriangle);
            }
            result += numTriangle + "\n";
        }
        return result
    }
}
let numberTrianlge = new NumberTrianglePattern(rowNumber);
console.log(numberTrianlge.getLeftHalfTriangle())