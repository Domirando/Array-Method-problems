// Problem1
// let arr = {}
// let given = [2, 3, 5, 2, 5, 4]
// let newArray = []
// given.forEach(item => arr[item] = 0)
// given.forEach(item => arr[item] += 1)
// for (let elem in arr){
//     if (arr[elem] > 1){
//         newArray.push(+elem, arr[elem])
//     }
// }
// console.log(newArray)

// Problem2
// let array1 = [1, 3, 4, 3, 4, 5],
//     array2 = [3, 1, 4, 5, 2, 8]
// let set = new Set([...array1, ...array2])
// let newArray = [...set]
// console.log(newArray)

// Problem3
let a = [1, 4, 3, 5, 2, 6, 0, 9],
    n = 1,
    m = 4
let b =  [].concat(a).slice(n, (m+1)).sort((a, b) => a > b ? 1 : -1)
console.log(b);