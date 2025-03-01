// Super constructor is special function which will call when a new property need to create in drived class (AKA child class) but as the same time uses the rest property of it's parent Class. 

// With this super constructor, every drived class can have the access to all properties which lie with in the respected drived class and till parent class. 

class Triangle {
    constructor (a,b) {
        this.a = a,
        this.b = b

    }
    getArea () {
        return (this.a*this.b)/2;
    };
    getHypotenous (){
        return Math.sqrt(this.a**2 + this.b**2)
    };
    getResult () {
        return `Area of triangle: ${this.getArea()} and Hypotenous of triangle: ${this.getHypotenous()}`
    }
};
class GeometryArea extends Triangle {
    // Adding it's own constructor just to add new property.
    constructor (a,b,color){
       super(a,b)
        this.color = color
    }
    getAreaOfSquare (){
        let area = this.a*this.b;
        return area;
    };
    getColor (){
        let areaWithColor = `Area with Color{${this.color}} is ${this.getArea()}`;
        return areaWithColor;
    }
}

class TestAreaWithcolor extends GeometryArea {
    // Adding it's own constructor just to add new property.
    constructor (a,b,color,age){
       super(a,b,color)
        this.age = age
    }
    getAgeWithAreaColor (){
        let areaWithColor = `Area with Color{${this.color}} is ${this.getArea()} and age is ${this.age}`;
        return areaWithColor;
    }
}

const myGeometryItem = new TestAreaWithcolor(3,4,'red',45);  
// Create the instance of class (TestAreaWithcolor)

console.log('myGeometry',myGeometryItem.getAreaOfSquare());