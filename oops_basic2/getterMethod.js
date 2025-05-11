class MyCircle  {
    constructor (a) {
        console.log('a',a);
        this._radius = a
        // this._diameter = a*2
    }
   get  myDiameter () {
        return this._radius*2;
    }
}

const circleRadius = new MyCircle();
circleRadius._radius = 22;
// console.log('circleDiameter',circleRadius.myDiameter);
// circleRadius._radius = 223;
console.log('myCircle',circleRadius.myDiameter);

// Get, allow us to write a function , 
//  which can be help us to retrive the object property without calling the function.
//  by this, we'll be able to treated it as property
//  but we don't call it as function with parathesis. 