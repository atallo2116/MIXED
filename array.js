// let arr=[4]
// arr.push('tt')
// arr.unshift('gg', 6)
// console.log(arr)

// //=====================
// let arr=[21, {name:"Abebe"}, ()=>console.log("Inside func"), [5, "uu"]]

// console.log(arr[1].name)
// arr[2]()

// //========================
// let fruits=['Apple', 'Orange', 'Lemon']

// console.log(fruits.at(-2)) //Lemon

// //========================
// let arr=[]

// arr[120]=12
// console.log(arr.length-1)
// console.log(arr[11])

// //======================
// let arr=new Array(2, 4, 'Abebe')

// console.log(arr)

// //======================
// let arr=[1,2,3]
// let str1= String(arr)
// let str2=arr.toString()

// console.log(arr, " and ", str1, " and ", str2)
// console.log(arr + " and "+ str1+ " and "+ str2) //change everything to string
// delete arr[1] // deleted and leaves a hole

// //============================
// console.log( 0 == [] ); // true
// console.log('0' == [] ); // false
// console.log( 0 == '' ); // true, as '' becomes converted to number 0
// console.log('0' == '' ); // false, no type conversion, different strings

// //============================
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // a,b,function(){...}

// //=============================
// // arr.splice(start[, deleteCount, elem1, ..., elemN]) //swiss army knife
// let arr=[1, 2, 3, 4]

// // console.log(arr.splice(0,2)) //delete and return 1 and 2
// // console.log(arr)

// // arr.splice(0,2, 6, 7, 8) //delete 1, 2 and add 6, 7, 8
// // console.log(arr)

// // arr.splice(0, 0, 8, 10, 7) // add 8, 10, and 7 at the begining
// // console.log(arr)

// arr.splice(2, 0, 8, 10, 7) // add 8, 10, and 7 at the from 2nd index
// console.log(arr)

// //====================
// //arr.slice([start], [end])
// let arr=[1, 2, 3, 4, 5, 6, 7]
// console.log(arr.slice(3, 5)) //slice 3-5

// //=====================
// //arr.concat(arg1, arg2...)
// let arr1=[1, 2, 3, 4]
// let arr2=[5, 6, 7]
// let arr3=[8, 9]

// // console.log(arr1.concat(arr2)) //
// console.log(arr1.concat(arr2, arr3))

// // ====================
// // arr.forEach(function(item, index, array) {
// //   // ... do something with an item
// // });

// let arr=[1,2,3,4]
// arr.forEach((a)=>
// {
//     console.log(a*2)
// })

// //====================
// let arr = [1, 0, false];

// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1
// console.log( arr.includes(1) ); // true

// //====================
// const arr = [NaN];
// console.log( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
// console.log( arr.includes(NaN) );// true (correct)

// //==================
// // let result = arr.find(function(item, index, array) {
// //   // if true is returned, item is returned and iteration is stopped
// //   // for falsy scenario returns undefined
// // });

// let arr=[{fName:"Abebe"},
//     {fName: "Solomon"},
// ]

// let x=arr.find((a)=>{
//     return (a.fName=="Abebe")
// })

// console.log(x.fName)

// //===================
// // let results = arr.filter(function(item, index, array) {
// //   // if true item is pushed to results and the iteration continues
// //   // returns empty array if nothing found
// // });

// let arr=[1, 2, 3, 4, 32, 43, 8, 1]

// let x=arr.filter(
//     (a)=>{
//         return (a>4)
//     }
// )

// console.log(x)

// //===================
// // let result = arr.map(function(item, index, array) {
// //   // returns the new value instead of item
// // });

// let arr=[1,2,3,44, 12, 32, 11]

// let x=arr.map(
//     (a)=>{
//         return(a*2)
//     }
// )

// console.log(x)

// //======================
// const arr = [5, 2, 10, 1];
// console.log(arr.sort())  // converted to string:  [1, 10, 2, 5]
// console.log(arr.sort((a, b) => a - b)) //Numbers:  [1, 2, 5, 10]

// let countries = ['Österreich', 'Andorra', 'Vietnam'];
// console.log(countries.sort())
// console.log(countries.sort((a,b)=>a.localeCompare(b)))

// //======================
// // let value = arr.reduce(function(accumulator, item, index, array) {
// //   // ...
// // }, [initial]);

// let arr=[2,1,6,3,14, 9]

// let x=arr.reduce((sum, i)=>{
//     return (sum=sum+i)
// }, 0)

// console.log(x)

// //=====================
// // reverse
// let arr=[1,2,3,4,5]
// console.log(arr.reverse())

// //===================
// let str="1234"
// let arr=str.split('')
// console.log(arr)

// let strJoin=arr.join('_')
// console.log(strJoin)

// let str2='Hungary, Ukrain, Germany'
// let arr2=str2.split(',')
// console.log(arr2)

// let strJoin2=arr2.join('_')
// console.log(strJoin2)

// //=====================
// let arr=[1,2,3,4]
