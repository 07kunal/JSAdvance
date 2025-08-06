const person ={
    name: 'kunal',
    tellMeFunc: function(){
        console.log('value of this',this.name);
        // console.log('name is ',this.name);
        return `${this.name} is good boy`;
    }
}
var kunal = person.tellMeFunc;
kunal();