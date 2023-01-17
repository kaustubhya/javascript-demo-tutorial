console.log('hello');
// Synchronous Programming => Takes no time, runs instantly
console.log('yo');

const dogImageDiv = document.getElementById('dogImage');
const dogButton = document.getElementById('dogButton');


const getNewDog = () => {
  // Asynchronous Programming example => Promise + 2 then statements
//  takes some time to run
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
  // grab data, turn it to json, we get an object type
.then(json => {
  dogImageDiv.innerHTML = `<img src='${json.message}' height = 300 width = 300/>`
});
}

dogButton.onclick = () => getNewDog();
console.log('yo');
