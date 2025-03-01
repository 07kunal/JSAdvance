let O1 = {
    name: "kunal",
    age: 25,

};

O1[1] = "Test";
O1["1"] = "Test2";
O1.$1 = "Test3";

// What is the output of below console.log ?
console.log('o1',O1.$1);

