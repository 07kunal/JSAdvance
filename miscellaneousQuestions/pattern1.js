// write a program for 10 to 0 in 4 row. 

let row = 4;
let number = 5;
let column = number;

class squarePattern {
    constructor(row, number, column) {
        if (row > 0 && number > 0 && column > 0) {
            this.row = row,
                this.column = column,
                this.number = number
        } else {
            throw new Error("Please check any negative number");
        }
        this.row = row,
            this.column = column,
            this.number = number
    }
    get SquarePattern() {
        for (let i = 0; i < this.row; i++) {
            let numberList = " ";
            for (let j = this.column; j >= 0; j--) {
                numberList += (j - 1 + 1) + " ";
            }
            console.log('numberList', numberList);
        }
    }
}
let numberList = new squarePattern(row, number, column);
console.log('numberList==', numberList.SquarePattern);