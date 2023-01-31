// Asynchronous Programming

// Your Order -> Tomato Soup 🍅
// Meanwhile you continue the conversation with a friend
// Resolved, your server brings you soup
// Rejected, no soup today

// const orderSoup = () => console.log('soup is ready');

// console.log('You start the conversation with your mum');

// // Start your Request
// setTimeout(orderSoup, 2000); // 2000ms = 2 sec
// console.log('Still Speaking');

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // randomly selecting true or false, getting a zero or a one
      isReady = [true, false] [Math.floor(Math.random() * 2)];
      isReady ? resolve('soup is ready ✅ 🥣🍲') : reject ('Soup is not ready, no soup today ❌')
      
    }, 2000);
  });
  
  // console.log(promise
  //             .then(success => console.log({success}))
  //            .catch(error => console.log({error}))
  //            );
  
  // then, if condition is true
  // catch, if condition is false
  // putting success and error, make them as objects which have their respective messages
  
  // RESOLVED - if the waiter brings you soup
  // tip the waiter
  // you pay for the soup
  
  // REJECTED - leave a bad review, no tip
  
  const getSoup = async () => {
    const data = {rating:null , tip: null, pay: null, review: null}
    
    try{
    const soup = await promise;
    console.log(soup);
      data.rating = 5
      data.tip = .2
      data.pay = 10 
      data.review = 5  + '⭐'
      return data
    }
    catch (error){
      console.log(error);
       data.rating = 1
      data.tip = 0
      data.pay = 10
      data.review = 1 + '⭐'
      return data
    }
  }
  
  console.log(getSoup().then(value => console.log(value)));
  
  const sum = async (a, b) => a+b
  console.log(sum(1, 2).then(value => console.log(value)), 'sum')
  
  // console.log('fetch:', 
  // fetch('https://dog.ceo/api/breeds/image/random')  // promise 1
  // .then(response => response.json())  // promise 2 
  // .then(data => console.log(data))          
  // )
  
  // to make the lines of code above better, we use 'async await'
  // async = asynchronous function
  // await = .then (response)
  
  // Rules for writing async await
  // 1. You must create a function
  // 2. You must use the keyword async
  // 3. Use the word await
  
  // const getDog = async () => {
  //   const url = 'https:dog.ceo/api/breeds/image/random'
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   console.log(data)
  // }
  
  // getDog()
  
  // Ways to get data back from an async function
  // 1. Use async await
  // 2. Use .then(value => console.log(value))