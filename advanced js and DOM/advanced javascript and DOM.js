// while loop
// used when we don't know how many times to run a loop

let event = true;

while (event == true){
  console.log("looping");
  event = false;
}


// ** addEventListener

// DOM - Document Object Model
let playDiv = document.getElementById('play');

// playDiv.onclick = () =>
//   {
//     console.log('YO-YO-YO')
//   }

// playDiv.addEventListener('click', function(){
//   console.log('Hello Everyone');
// });

document.addEventListener('keydown', function(e){
  // e = keyboard event 
  if(e.key == "q"){
    console.log("You pressed Q");
    document.getElementById('punch').play();
  }
  else{
  console.log('Mere Dost you did not press Q');
    document.getElementById('punch2').play();
    
  }
});


