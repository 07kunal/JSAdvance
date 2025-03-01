function getAreaTriangle(a, b) {
    return (a + b) / 2;
};
function getHypotenuseTriangle(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
// There might be lots of function which might related to trianle but to make it more readable. we can use POJO ( plan old javascript object.)


//  Using POjo approach. 

let myTriangle = {
    a: 3,
    b: 60,
    getAreaTriangle: function () {
        return (this.a + this.b) / 2;
    },
    getHypotenuseTriangle: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};

// Here in the above code, it is written in POJO format, which consists of the "this" keyword, which points to the object where it is declared. 
// Draw back of above is this, It hard to handle multiple object with consist same functionality along with respect data. which cause overused memory. 

// To mitigate above issue we can use the javaScript class method. 

// JavaScript Class. 
//  it's help to create a template which will use to create the instance of new object . and by this we can have multiple instane . 

// Class consist constructor which follow as,
// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties.

class myTrianlgeFeature {
    // Constructor use to initialise the property of object.
    constructor(a, b) {
        this.a = a;
        this.b = b;
      }
    getAreaTriangle() {
        return (this.a + this.b) / 2;
    }
    getHypotenuseTriangle() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};
const myTriangle2 = new myTrianlgeFeature (5,78);
// by doing this it overwrite above thing
myTriangle2.a = 40;
myTriangle2.b=5;
console.log("Ar of triangle:", myTriangle2);
console.log("Hypotenuse of triangle:", myTriangle2.getHypotenuseTriangle());
