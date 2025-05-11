class CheckPrivateField {
    // private field
    #Radius;
    constructor(radius){
        this.#Radius = radius
    }
    // Private method
    #getRadius (){
        return this.#Radius;
    }
    getPrivateRadius (){
        return this.#getRadius();
    }
}
const myPrivateField = new CheckPrivateField(3);
console.log('@myPrivateField',myPrivateField.getPrivateRadius());

//  private field