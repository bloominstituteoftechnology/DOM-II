//./less/index.less'

// Your code goes here!

// 1.) changes text of "Fun Bus" on hover
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener('mouseover', (event) => {
    event.target.innerHTML = 'Bad Bus';
        setTimeout(function() {
        event.target.innerHTML = 'Fun Bus';
    }, 500);
}, false); 

//2.) changes nav bar to red 
const xc = document.querySelector('nav');
xc.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
})

//3. makes bus photo bigger or smaller
const busPocc = document.querySelector('.intro img'); 

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    busPocc.style.transform = `scale(${scale})`;
  }
  let scale = 1;
busPocc.addEventListener('wheel', zoom);

//4 random color on key press in body

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
 keyPress.style.backgroundColor = bgColor }

const keyPress = document.querySelector("body")



keyPress.addEventListener('keydown',random_bg_color)


//5

