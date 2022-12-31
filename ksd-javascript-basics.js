// console.log('hello world');
// console.log('ksd');
// console.log('shukla');

// Baby Weather App

// let weather = prompt('How is the weather')

// if(weather == 'rain'){
//   console.log('Grab your umbrella ☔')
// }
// else{
//   console.log('Grab your Sunglasses 😎🕶')
// }


// here 'naam' is an argument
// function sayMyName(naam){
//   console.log(naam)
// }

// sayMyName('Lajja')

// // here the ouput is same as 'hi ' + name + ', nice to meet you 😊(●'◡'●)' 
// // we just used a neater method here called template literals
// function greeting(name){
//   console.log(`hi ${name}, nice to meet you 😊(●'◡'●) `)
// }

// greeting('Chhota Tappu')

// function sum(a,b){
//   return a+b
// }

// let fog = sum(2,4)
// console.log(fog)

// function foodTotal(food, tip){
//   const tipPercent = tip/100
//   const tipAmount = food * tipPercent
//   const totalAmount = sum(food, tipAmount)

//   return totalAmount
// }

// console.log(foodTotal(200,20))

// // Arrow function: =>
// // no need to write return statements and { } in implicit returns
// const sumArrow = (a,b) => a + b

// //explicit returns
// const sumArrow2 = (a,b) => {
//   return a + b
// }

// console.log(sumArrow(10,44))
// console.log(sumArrow2(11,20))

// Arrays

// const groceries = ['🍌', '🍭', '💕', '🍉', '🍊']
// console.log(groceries);
// console.log(groceries[4])
// console.log(groceries[0])
// console.log(groceries[3])

 // groceries.push('🤌🏽')
// console.log(groceries)
 // groceries.push('⭐')
 // console.log(groceries)

// console.log(groceries.slice(2,5))
// careful of the numbers order
// console.log(groceries.indexOf('🍉'));
// console.log(groceries.length);

// Objects
// key-value pairs

// const person = {
//   name: 'Leo',
//   job: 'Footballer'
// }

// // dot notation
// console.log(person.job)

// // brackett notation
// console.log(person['name']);

// // assign values
// person.phone = '123456789'
// console.log(person.phone)

// console.log(person)

// const person2 = {
// name: 'Qazi',
//   shirt: 'black'
// }
// console.log(person2['name'])

// const introducer = (name, shirt) => {
//  const person = {
//   name: name,
//   shirt: shirt,
//    assets: 10000,
//    liabilities: 6000,
//    netWorth: function (){
//      return this.assets - this.liabilities
//    }
// }
//   const intro = `Hi! my name is ${person.name} and the colour of my shirt is ${person.shirt} and my net worth is Rs ${person.netWorth()}`
//   // take care of the back commas

//   return intro
// }

// console.log(introducer('Leonardo', 'White'));

// const groceries = ['🍌', '🍭', '💕', '🍉', '🍊']

// for (const grocery of groceries){
//   // notice the variable names here
//   console.log(grocery)
// }


// const double = (numbers) => {
//   let result = []

//   for (const sum of numbers){
//   // console.log(sum *2)
//   result.push(sum**2)
//     // for squaring, another method

// }
//  return result


// }
// console.log(double([1,3,5,7,9]))


// let result = 0;
// const howManyLetters = (phrase) => {

  // for(letters in phrase){

  //   // to get no. of letters, use `of` in place of `in`
  //   console.log((Number)(letters) + 1)
  //   result = (Number)(letters)+1
  //   // bracket positioning is a bit different
  // }

  // return {result: phrase.length}
  // returning it as an object
// }

// const phrase = prompt('Phrase de lawde')

// console.log(howManyLetters(phrase))

// const sumArray = (numbers) =>
//   {
//     let result = 0

//     for (const number of numbers){
//       console.log(number)
//       result = result + number
//     }

//     return {result}
//    }
// const nums = [1,2,3,4]
// console.log(sumArray(nums))

// const max = (numbers) => {
//   let result = 0

//   for (number of numbers){
//     console.log(number)
//     if(number > result)
//       result = number
//   }
//   return {result}
// }

// const nums = [1, 7 , 9 , 2 , 6 , 3 , 0 , 4]
// console.log(max(nums))

// const letterFrequency = (phrase) => {
// // letter frequency ('haha') 👉🏽 ('h': 2,  'a': 2)  
//   console.log(phrase)

//   // make a `frequency` object {}

//   let frequency = {}

//   for (const letter of phrase) {
//     console.log(letter)
// // check if letter exists in frequency
//     if (letter in frequency){
//       // increment the value by 1
//       frequency[letter] += 1
//      }else{
//       frequency[letter] = 1
//      }
//   }

//   return frequency
// }

// console.log(letterFrequency('Hey Bro, whatcha doing tonight, got any plans??'))


// // word frequency
// const wordFrequency = (phrase) => {
//   const words = phrase.split(' ')
//   return letterFrequency(words)
// }

// const userInput = prompt('Write your sentence')
// console.log(wordFrequency(userInput))

// let result = [1,2,3,4,5].map(number => number*2);
// console.log(result);

// map looks and returns an array

// const doubleMap = (numbers) => {
//   return numbers.map(numbers => numbers * 2)
// }

// console.log(doubleMap([1,2,3]));

// const filters = (number, greaterThan) =>{
//   let arr = [];
//   for (const num of number) {
//     if(num > greaterThan){
//       arr.push(num)
//     }
//   }

//   return arr;
  
// }
//  console.log(filters([1,2,3,4,5,6] , 2))

// const nummy = [1,2,3,4,5,6,7];
// console.log(nummy.filter(num => num >= 3 && num < 2))

// const actors = [
//   {name: 'John Cena', netWorth: 2500000},
//   {name: 'Messi', netWorth: 100000000},
//   {name: 'Kulhi', netWorth: 15000000000},
//   {name: 'Popeye', netWorth: 20},
//   {name: 'Catarina Jade', netWorth: 5700000},
//   {name: 'Bruce Faki', netWorth: 2538},
  // {name: 'Big Show', netWorth: 50000},
// ]

  // let result = actors.filter(actors => actors.netWorth > 100000)
// console.log(result)
// console.log(actors.reduce((previous, current) => previous + current.netWorth,0))
// playground.innerHTML = `<h1> ${JSON.stringify(result)} </h1>`

// To get only names, use Maps and then pull out the names

// let names = result.map(actor => actor.name).join(', ')

// playground.innerHTML = `<h1> ${names} </h1>`


//reduce
// sum of all the net worths
// SUM: Think reduce
// reduce takes in a function as an argument
// reduce loops and gives you back the accumulator

// const nums = [1, 2 , 3]

// nums.reduce(function(previous, next){
//   console.log(next)
// })
// take care of the syntax


// const nums = [1, 2, 3]

// // const result = nums.reduce(function(previous, next){
// //   return previous + next
// // })
// // console.log(result)

// // //IMPLICIT METHOD

// const result = nums.reduce((previous, next) => previous + next, 0)
//  // see video to know why is that 0 there
//  // basically reduce takes in two different types of arguments, a function and a number (here that number is 0). If a number is zero, it's optional to put it there
// console.log(result)


