class User {
    constructor(fName, lName) {

        this.fName = fName
        this.lName = lName
    }
    get getFullName() {
        console.log('checking this', this);

        return this.fName + ' ' + this.lName
    }
    set setFullName(test) {
        const [fName, lName] = test.split(' ');
        this.fName = fName;
        this.lName = lName
        return console.log('new ', test);
    }

}

let UserProfile = new User();
UserProfile.fName = 'kunal',
    UserProfile.lName = 'gautam'
console.log('userProfile', UserProfile.setFullName = 'Lilly willium');