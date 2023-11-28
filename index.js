// 1) Given an string reverse each word in the sentances 

// let arr = 'basuraj How are you'
// let savedstr = arr.split(' ').map(function(word) {
//   return word.split('').reverse().join('')
// })

// console.log(savedstr.join(' '))


// Q2 how to check  if an object is an array or object 

// function checkArray(elem) {
//   return Array.isArray(elem)
// }

// console.log(checkArray([]))
// console.log(checkArray({}))

// how to empty an array in java script 
// * do not reset it to new array and dont loop throughto pop each method 

// let arr = [1,3,5,6,7,]
// arr.length =0
// console.log(arr.length)

// Q4 how to check if num is na interger 
// let a = 12.5

// if (a%1==0){
//   console.log( `${a} is an interger `)
// }else{
//   console.log( `${a} is not an integer `)
// }


// Q5 make this works means duplicate an array 
// example arr=  [1,2,3] output should be [1,2,3,1,2,3]
// let arr = [1,2,4]
// function dublicate (arr){
//    return arr.concat(arr)
// }

// console.log(dublicate(arr))

// Q6  reverse the number 
// method 1 
// let a = 12
// function reverse(n){
//  return  Number(  n.toString().split('').reverse().join('')
// )
// }

// console.log(reverse(a))

// method 2 
// let num = 123
// let rev = 0
// function reversekar(num) {
//   while (num > 0) {
//     rem = num % 10
//     rev = rev * 10 + rem
//     num = Math.floor(num / 10)
//   }
//   return rev
// }
// console.log(reversekar(num))

// Q7 chech weather string is palidrome or not 
// let str = 'raju'

// function checkPlaidrome(str) {
//   let reversed = str.split('').reverse().join('')
//   return reversed === str
// }
// console.log(checkPlaidrome(str))

// Q8 wrtite an java sript that return  a pass string with letter in aphbetical order

// let str = 'basurj'

// function makeitAlph(str){
//   return str.split('').sort().join('')
// }

// console.log(makeitAlph(str))

// Q9 write an js question make every word capiting for given sting 

// let str = 'basuraj how are you'

// function makeCaps(str) {
//   let capsstr = str.split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.substring(1)
//   })
//   return capsstr.join(' ')
// }

// console.log(makeCaps(str))

// Q11 write a java script function to get the number of occureence of ech letter in speciied string

// let str = 'basuraj'

// function countOcc(str) {
//   let countOccDic = {}
// str.split('').forEach(function(word){
//   if(countOccDic.hasOwnProperty(word) == false){
//     countOccDic[word]=1
//   }
//   else{
//     countOccDic[word] ++
//   }
// })

//   return countOccDic

// }

// console.log(countOcc(str))


// exersise based on these HTMLOptionsCollection
// Objective: Write a function to reverse each word in a sentence.
// Q12 lopp an array and add all meember of it 

// let arr  = [1,3,5,6,7,]

// sum = 0 

// arr.forEach(function(elem){
//   sum  = sum +elem
// })


// console.log(sum )

// Q13  in an arry of number and strings , only add those member  which are not string 

// let arr = [1, 3, 5, 6, 'f', 6, 'e']
// sum = 0
// arr.forEach(function(ele) {
//   if (typeof ele === 'number') {
//     sum = sum + ele
//   }

// })

// console.log(sum)

// Q14 loop an array of objects and remove all objects which don't have gender value male 

// let arr = [
//   {
//     name: 'Basuraj',
//     gender: 'male'
//   },
//   {
//     name: 'srikant',
//     gender: 'male'
//   },
//   {
//     name: 'ramya',
//     gender: 'female'
//   },
//   {
//     name: 'sajana',
//     gender: 'male'
//   },
// ]
// method 1 

// let newArr = arr.filter(function(elem){
//   return elem.gender ==='male'
// })

// console.log(newArr)

// method 2 

// let count = 0
// arr.forEach(function(elem) {
//   if (elem !== 'male') count++

// })
// console.log(count)

// for (j = 0; j <= count; j++) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].gender !== 'male') {
//       arr.splice(i, 1)
//     }
//   }
// }

// console.log(arr)

// Q15 clone and arry 

// method 1 
// function clonedArr(arr){
//   return [...arr]
// }
// let newarr = clonedArr([1,3,5,7,8])
// console.log(newarr)

// method2 

// function clonedArr(arr){
//   let newArr = []
//   arr.forEach(function(ele){
//     newArr.push(ele)
//   })
//    return newArr
// }

// let clonedNewArr = clonedArr([1,4,6,7])
// console.log(clonedNewArr)