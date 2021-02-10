// Your code goes here
// BUTTONS ///////////////////////////////////////////////////////////////////////////////////////////////////

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

// Fun In The Sun Button

btn1.addEventListener('click', event => {
  btn1.style.background = "white";
  btn1.style.color = "black";
  btn1.style.transform = "rotate(0deg)";
  btn1.style.border = "2px solid black";
});

btn1.addEventListener('mouseover', event => {
  btn1.style.background = "red";
  btn1.style.color = "black"; 
  btn1.style.transform = "rotate(-15deg)";
  btn1.style.border = "2px solid black";

})

// Mountain Excursion Button

btn2.addEventListener('click', event => {
  btn2.style.background = "darkgrey";
  btn2.style.color = "white";
  btn2.style.transform = "rotate(0deg)";
  btn2.style.border = "2px solid black"; 
});

btn2.addEventListener('mouseover', event => {
  btn2.style.background = "green";
  btn2.style.color = "black";
  btn2.style.transform = "rotate(-15deg)"; 
  btn2.style.border = "2px solid black";
})

// Island Getaway Button

btn3.addEventListener('click', event => {
  btn3.style.background = "black";
  btn3.style.color = "darkgrey";
  btn3.style.border = "2px solid darkgrey";
  btn3.style.transform = "rotate(0deg)";
});

btn3.addEventListener('mouseover', event => {
  btn3.style.background = "blue";
  btn3.style.color = "black"; 
  btn3.style.transform = "rotate(-15deg)";
  btn3.style.border = "2px solid black";
})


// IMAGES ////////////////////////////////////////////////////////////////////////////////////////////////////

const busImg = document.querySelector(".busImg");
const mapImg = document.querySelector('.mapImg');
const cityBoatImg = document.querySelector('.cityBoatImg');
const islandBoatImg = document.querySelector('.islandBoatImg');

// Image Of Toy Bus In Sand

busImg.addEventListener('click', event => {
    busImg.style.marginTop = "30px";
    busImg.style.borderRadius = "15px";
    busImg.style.border = "2px solid black";
    busImg.style.boxShadow = "0px 0px 25px 3px black";
});

// Image Of Map On Table

mapImg.addEventListener('click', event => {
    mapImg.style.borderRadius = "15px";
    mapImg.style.border = "2px solid black";
    mapImg.style.boxShadow = "0px 0px 25px 3px black";
});

// Image Of Boat In The City

cityBoatImg.addEventListener('click', event => {
    cityBoatImg.style.borderRadius = "15px";
    cityBoatImg.style.border = "2px solid black";
    cityBoatImg.style.boxShadow = "0px 0px 25px 3px black";
});

// Image Of Boat On The Shore

islandBoatImg.addEventListener('click', event => {
    islandBoatImg.style.borderRadius = "15px";
    islandBoatImg.style.border = "2px solid black";
    islandBoatImg.style.boxShadow = "0px 0px 25px 3px black";
});


// TYPE "FUN BUS!" ON PAGE ///////////////////////////////////////////////////////////////////////////////////

document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        //F
        case 70:
          setBackgroundColor('red');
          break;
        //U  
        case 85:
          setBackgroundColor('green');
          break;
        //N  
        case 78:
          setBackgroundColor('blue');
          break;
        //SPACE  
        case 32:
          setBackgroundColor('yellow');
          event.preventDefault();
          break;
        //B  
        case 66:
          setBackgroundColor('teal');
          break;
        //S
        case 83:
          setBackgroundColor('purple');
          break;
        //!
        case 49:
          setBackgroundColor('white');
    }
  });
      
  // Background Color Function

  function setBackgroundColor(color) {
      document.querySelector('body').style.backgroundColor = color;
  }


// NAVIGATION BAR ////////////////////////////////////////////////////////////////////////////////////////////

const funBus = document.querySelector('.funBus');
const aTag0 = document.querySelector(".a0");
const aTag1 = document.querySelector(".a1");
const aTag2 = document.querySelector(".a2");
const aTag3 = document.querySelector(".a3");

// Fun Bus Navigation Text

funBus.addEventListener('mouseover', event => {
  alert("Click The Images For A Better Look!"); 
});

// Home aTag

aTag0.addEventListener('click', event => {
  aTag0.style.transform = "rotate(-15deg)";
  aTag0.style.color = "red";
  aTag0.style.fontWeight = "bold";
  event.preventDefault();
});

// About Us aTag

aTag1.addEventListener('click', event => {
  aTag1.style.transform = "rotate(15deg)";
  aTag1.style.color = "green";
  aTag1.style.fontWeight = "bold";
  event.preventDefault();
});

// Blog aTag

aTag2.addEventListener('click', event => {
  aTag2.style.transform = "rotate(-15deg)";
  aTag2.style.color = "blue";
  aTag2.style.fontWeight = "bold";
  event.preventDefault();
});

// Contact aTag

aTag3.addEventListener('click', event => {
  aTag3.style.transform = "rotate(15deg)";
  aTag3.style.color = "yellow";
  aTag3.style.fontWeight = "bold";
  event.preventDefault();
});

// Wheel Trigger Header Background Color Change

const headerNav = document.querySelector("header");
headerNav.addEventListener('wheel', event => {
  headerNav.style.background = "#666";
});