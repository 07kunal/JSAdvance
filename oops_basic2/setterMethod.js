class MyCircle {
    static allowedColor = new Set(['red', 'green', 'blue']);   // Set is the pre-define class.
    constructor(radius, color) {
        if (MyCircle.allowedColor.has(color) && radius > 0) {
            this._radius = radius;
            this._color = color
        } else {
            throw new Error("That color is not allowed and radius can't be negative");
        }

    }
    // set the value of radius, by using set keyword. 
    // This "set" keyword , help to use the function as property and update the value. 
    get radius() {
        return this._radius;
    }
    set updateRadius(value) {
        if (value < 0) {
            throw new Error("Radius can't be -ve");
        } else {
            this._radius = value;
        }
    }
    get color() {
        return this._color;
    }
    set updateColor(value) {
        if (MyCircle.allowedColor.has(value)) {
            this._color = value
        } else {
            throw new Error("That color is not allowed");
        }
    }
}
const circle = new MyCircle(23, 'red');
circle.updateColor = 'blue';
console.log('circle==', circle);

// Note point to understand
// -> any property define using _anyName ( with underscore) that means
// -> it's not meant to be change. 