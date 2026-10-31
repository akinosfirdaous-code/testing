function addToCart(){
    alert('Product added to cart')
}

// alert('Hello world')
// prompt('Insert your age')
// confirm('Are you sure you want to exit?')
// console.log(5 + 7)


// Variable declaration
// var
// let
// const

// let username = 'Mary'
// username = 'John'
// console.log(username)

// const username = 'Mary'
// username = 'John'
// console.log(username)


// Data Types
// Primitive Data type
// Number Data type
// let age = 50.8
// console.log(age)

// String Data type
// let title = 'Engineer'
// console.log(title)

// Boolean Data type
// let isMarried = true
// console.log(isMarried)

// Null Data type
// let locations = null
// console.log(locations)

// undefined Data type
// let time;
// console.log(time)

// Non primitive Data type
// Date data type
// let time = new Date().getHours()
// let season = new Date().getMinutes()
// console.log(time,":",season)


// function data type
// function addNumber(a, b){
//     let sum = a + b
//     console.log(sum)
// }
// addNumber(15, 8)


// Array
// length   1      2     3       4      5
// let arr = [true, false, null, 'James', 320]
// index    0      1     2       3      4
// console.log(arr.length)
// console.log(arr[3])


// Array method
// let colors = ['white', 'black', 'green', 'red', 'blue']
// colors.pop() // removes the last element in an array
// colors.push('grey') // adds an element to the ending of an array
// colors.shift() // removes from the start of an array
// colors.unshift('orange') // adds an element to the start of an array
// console.log(colors)


// Nested Arrays
// const properties = [
//     'shoes',
//     cars=['Toyota', 'Porshe', benz=['GLK', 'AML', 'AMG'], 'Lamborghini'],
//     companies=['Tech Hub', 'Saloon', factories=['Sugar', 'Cement', cereals=['Quaker Oats', 'fruits and fibre', 'golden morn']]],
//     houses=['Bungalow', 'Duplex', 'Condos'],
//     'yatch'
// ]
// console.log(properties[3][1])
// console.log(properties[2][2][2][2])
// console.log(cereals[2])


// Objects
// let person = {
//     name: 'John',
//     age: 38,
//     religion: 'Muslim',
//     isMarried: true,
//     job: 'Tailor'
// }
// console.log(person.isMarried)


// Nested Objects
// const person = {
//     name: 'Jane',
//     sex: 'Female',
//     age: 25,
//     isMarried: true,
//     jobdesc: {
//         title: 'UI Engineer',
//         role: 'Team Lead',
//         company: 'Google',
//         stats: {
//             level: 'Tier 1',
//             started: 'June 2022',
//             ended: 'Currently works here',
//             taskAssigned: 195,
//             taskCompleted: 182,
//             taskPending: 13
//         }
//     }
// }
// console.log(person.jobdesc.stats.taskAssigned)


// Array of Objects
// const players = [
//     {
//         name: 'Lionel Messi',

//         age: 40,
//         club: 'Inter Miami',
//         country: 'Argentina'
//     },
//     {
//         name: 'Cristiano Ronaldo',
//         age: 41,
//         club: 'Al Nassr',
//         country: 'Portugal'
//     },
//     {
//         name: 'Kelvin De Bruyne',
//         age: 37,
//         club: 'Napoli',
//         country: 'Belgium'
//     },
//     {
//         name: 'Toni Kroos',
//         age: 38,
//         club: 'Retired',
//         country: 'Germany'
//     },
// ]


// Arithmetic Operators
// console.log(5 + 7)
// console.log(7 - 4)
// console.log(4 * 3)
// console.log(10 / 2)
// console.log(3 ** 4) //exponential operator  eg: 3 * 3 * 3 * 3
// console.log(10 % 3) //modulus operator

// Shorthand operators
// let price = 3000
// let quantity = 4
// price -= quantity
// console.log(price)


// increment operator
// let num = 5
// num++
// console.log(num)

// decrement operator
// let nums = 5
// nums--
// console.log(nums)

// string concatenation
// let school = 'Gomycode'
// let address = '230 Herbert Macauley way'
// let locations = 'I attend ' + school + '. It is situated at ' + address + '.'
// console.log(locations)

// Template literal
// let newLocation = I attend ${school}. It is situated at ${address}.
// console.log(newLocation)

// comparison operators
// console.log(5 == '5') //equal to
// console.log(5 != 7) //not equal to
// console.log(5 === '5') //strictly equal to
// console.log(8 !== 7) //not strictly equal to
// console.log(10 < 15) // lesser than
// console.log(12 > 9) //greater than
// console.log(15 >= 20) //greater than or equal to
// console.log(20 <= 40) //lesser than or equal to

// logical operators
// And operator &&
// let storedUsername = 'jolene'
// let storedPass = 12345

// let insertUser = 'Jolene'
// let insertpass = 12345
// let login = (insertUser === storedUsername && insertpass === storedPass)
// console.log(login)

// let login = (insertUser === storedUsername || insertpass === storedPass)
// console.log(login)


// conditional statements
// if statements
// let marks = 35
// if(marks > 40){
//     console.log('You passed')
// }else{
//     console.log('You failed')
// }


// let destination = 'abuja'
// if(destination === 'lagos'){
//     console.log('Welcome to lagos')
// }else if(destination === 'abuja'){
//     console.log('Welcome to abuja')
// } else if(destination === 'lokoja'){
//     console.log('Welcome to lokoja')
// }else{
//     console.log('Your destination is not stated')
// }


// Switch statement
// function decodeColor(){
//     let color = 'z'
//     switch(color){
//         case 'y': console.log('You chose red');
//         break;
//         case 'z': console.log('You chose black');
//         break;
//         case 'x': console.log('You chose blue');
//         break;
//         case 'b': console.log('You chose green');
//         break;
//         default: console.log('You did not choose a valid color')
//     }
// }
// decodeColor()


// Ternary operator
// let score = 20
// let result = (score > 40) ? 'You passed' : 'You failed'
// console.log(result)

// chained ternary operator
// let result = (score < 40) ? 'failed' : (score > 40 && score <= 75) ? 'Passed' : (score > 75 && score <= 100) ? 'Excellent score' : 'You did not write the test'
// console.log(result)


// Iteration operators
// while loop
// let numArr = [4, 2, 5, 1]
// let sum = 0;
// let i = 0
// while(i < numArr.length){
//     sum += numArr[i]
//     i++
// }
// console.log(sum)


// do while loop
// let numArr = [4, 2, 5, 1]
// let sum = 0;
// let i = 0
// do{
//     sum += numArr[i]
//     i++
// }while(i < numArr.length)
// console.log(sum)

// for loop
// let numArr = [4, 2, 5, 1]
// let sum = 0;

// for(let i = 0; i < numArr.length; i++){
//     sum += numArr[i]
// }
// console.log(sum)




// Convert to fahrenheit
// function convert(celcius){
//     let fahrenheit = celcius * (9/5) + 32
//     console.log(fahrenheit)
// }
// convert(25)


// reverse a word
// function reverse(word){
//     let reversedWord = word.split('').reverse().join('')
//     console.log(reversedWord)
// }
// reverse('Hello')


// palindrome
// function isPalindrome(str){
//     let reversed = str.split('').reverse().join('')
//     console.log(str === reversed)
// }
// isPalindrome('madam')
// isPalindrome('cat')


// Check for vowels
// function countVowels(str){
//     let count = 0
//     let vowels = "aeiou"

//     for(let alp of str.toLowerCase()){
//         if(vowels.includes(alp)){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels('javascript'))