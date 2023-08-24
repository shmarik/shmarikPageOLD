let arr = [
    "pava",
    "pepe",
    "lala",
]

let mixedArr = [
    "JS",
    {
        name: "Alex",
        age: 43
    },
    false,
    function (){
        console.log("Hello");
    },
]

console.log(mixedArr[1].name)
mixedArr[3]()

let matrix = [
    [1,2,3,],
    [4,5,6,],
    [7,8,9,],
]

console.log(matrix[1][1])