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

let str = 'basuraj'

function countOcc(str) {
  let countOccDic = {}
str.split('').forEach(function(word){
  if(countOccDic.hasOwnProperty(word) == false){
    countOccDic[word]=1
  }
  else{
    countOccDic[word] ++
  }
})

  return countOccDic
  
}

console.log(countOcc(str))