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
    getAreaOfSquare (){
        let area = this.a*this.b;
        return area;
    };
}
// const myTriangle = new Triangle(43,33);
const myGeometryItem = new GeometryArea(3,4);  
// Create the instance of class (GeometryArea)

console.log('myGeometry',myGeometryItem.getAreaOfSquare());

//  conclusion point,
//  parentClass = Triangle
// subClass = GeometryArea
// if the method in parentClass and subclass is same in term of define name, then the method inside the subClass is call first and return the result.
// If the method is not available inside the subClass then it looks toward it's parent class to execute. 
// constructor will auto called whenever we intantiate the instance of class. 
//  "this" keyword does not refer to class but it actually points to instance of class. 