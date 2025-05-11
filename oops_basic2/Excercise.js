class UserProfile {
  constructor(username, email, birthdate) {
    if (username === '' || typeof username !== 'string') { //user val
      throw new Error('Invalid username.')
    } else {
      this._username = username
    }
    const regex = /^\d{4}-\d{2}-\d{2}$/; //bday val
    let x = regex.test(birthdate);
    if (x) {
      this._birthdate = birthdate
    } else {
      throw new Error('Invalid birthdate.')
    }
    if (!email.includes('@')) { //mail val
      throw new Error('Invalid email.')
    } else {
      this._email = email
    }
  }
  set username(newName) { //set new name
    if (newName === '' || typeof newName !== 'string') {
      throw new Error('Invalid username.')
    } else {
      this._username = newName;
    }
  }
  set birthdate(bday) { //set new bday
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    let x = regex.test(bday);
    if (x) {
      this._birthdate = bday
    } else {
      throw new Error('Invalid birthdate.')
    }
  }
  set email(newMail) { //set new mail
    if (!newMail.includes('@')) {
      throw new Error('Invalid email.')
    } else {
      this._email = newMail;
    }
  }
  get username() {
    return this._username
  }
  get email() {
    return this._email
  }
  get birthdate() {
    return this._birthdate
  }
}

const userProfile = new UserProfile();
console.log('@userProfile', userProfile);