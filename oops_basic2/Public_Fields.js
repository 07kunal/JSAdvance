class Cat {
    // Public field is provide the cleaner constructor by just removing default key from it and place it above that with default value. it basically provide full documentation of class. 
    static numOfCats = 0;
    name;
    breed;
    numOfLegs = 4;
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        Cat.numOfCats += 1;
    }
}

const myCat = new Cat('lucius', 'danger');

console.log('myCat', myCat);