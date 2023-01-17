console.log('hello')

let titleDiv =
  document.getElementById('title')

console.log('before: ', titleDiv.innerText)


let message = 'Goodra is back!'

titleDiv.innerText = message;
console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML=`<p> ${message} </p>`

titleDiv.style.backgroundColor = 'red'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// console.log(squares[1].value)

// for each loop
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    // console.log(square.value)
  }
})

// making a clear button

function clearScores() {
timesClicked.red = 0
timesClicked.yellow = 0
timesClicked.green = 0
squares.forEach(square => {
 square.innerText = ''   
  })
}

const clearGameButton = document.getElementById('clear-game')
clearGameButton.onclick = () => clearScores()