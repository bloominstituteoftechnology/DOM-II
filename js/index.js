// Your code goes here
// I believe that in order to change something I need to select it first so I will start by selecting 10 items which may or may not be the ones I end up creating listeners for
const mainNav = document.querySelector('.main-navigation')
const genNav = document.querySelector('nav')
const firstSignMeUpButton = document.querySelector('.btn')//used
const pickYour = document.querySelector('.content-destination')
const destination = document.querySelector('.destination')
const intro = document.querySelector('.intro')//used
const funBus = document.querySelector('.logo-heading')//used
const mapImg = document.querySelector('.img-fluid')
//console.log(mapImg)


//1
function changeTitle(){
    console.log('mouse over Fun Bus');
    funBus.textContent = 'The Funnest';
};

funBus.addEventListener('mouseover', changeTitle)

//2
function changeTitleBack() {
    console.log('mouse over Fun Bus 2')
    funBus.textContent = 'Fun Bus for the win'
}
funBus.addEventListener('mouseleave', changeTitleBack);

//3
window.addEventListener('load',  event => {
    console.log('The page loaded and your listener is working')
    intro.style.backgroundColor = 'beige'
});

//4
function getExcited (){
    console.log('first of the buttons has been clicked')
    firstSignMeUpButton.textContent = 'GET EXCITED!'
    firstSignMeUpButton.style.backgroundColor = 'beige'
}

firstSignMeUpButton.addEventListener('dblclick', getExcited)
// want to ask or google how to get this to work on all/ any of the buttons and/or a button of my choosing


//5
function changeImg(event){
    console.log('testing image capture')
    mapImg.style.border = '1px solid red'
}

mapImg.addEventListener('keydown', changeImg);
//not working


// const heightOutput = document.querySelector('body');
// const widthOutput = document.querySelector('body');
// function reportWindowSize() {
//     heightOutput.textContent = window.innerHeight;
//     widthOutput.textContent = window.innerWidth;
//   }
  
// window.addEventListener('resize', reportWindowSize)

// not working

//6
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.img-content');
  el.onwheel = zoom;

  el.addEventListener('wheel', zoom);
