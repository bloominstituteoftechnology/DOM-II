// Your code goes here
/*function clickEventHandler(event) {
    event.preventDefault()
   console.log(event.type + '!!!!!!!!!!!')
   console.log(EventTarget)
   console.log(event.currentTarget)
  
}

//homeLink.addEventListener('click', clickEventHandler)
document.querySelector('nav').addEventListener('click', clickEventHandler)
document.querySelector('.main-navigation').addEventListener('click', clickEventHandler)
document.body.addEventListener('click', clickEventHandler)
document.addEventListener('click', clickEventHandler)
window.addEventListener('click', clickEventHandler)
*/
const navLinks = document.querySelector('a')
const busImg = document.querySelector('.intro img')
const destination = document.querySelector('.destination');
const footer = document.querySelector('.footer')
const body = document.querySelector('body')
const btn = document.querySelector('.btn')
const middleImage = document.querySelector('.content-destination img');
const headerContainer = document.querySelector('.intro');
const destinationText = document.querySelectorAll('.destination');

// 1.
navLinks.addEventListener('mouseover', () => {
    console.log('mouse went over')
    navLinks.style.color = 'yellow';
});

// 2. 
navLinks.addEventListener('mouseout', () => {
    console.log('mouse went out')
    navLinks.style.color = 'black';
})  

// 3. 
document.addEventListener('keydown', logKey);

function logKey(e) { 
  body.textContent += ` ${e.code}`;
  console.log('button pressed')
}
// 4.
btn.addEventListener('click', () => {
   btn.style.backgroundColor = 'red';
   console.log('changed 2 red')
  });

 // 5.
  middleImage.addEventListener('mousemove', function(){
    middleImage.style.opacity="0.5";
    middleImage.style.filter="alph(opacity=50)";
    console.log('im see thru')
  })
 
// 6.
  middleImage.addEventListener('dragstart', function(){
    console.log("i cant move");
  })
 
// 7.
headerContainer.addEventListener('wheel', function(){
   
    event.currentTarget.style.border = "2px dotted black"; 
    event.currentTarget.style.padding = "90px 20px 20px 20px";
    console.log('wheel dotted border added')
});

// 8.
headerContainer.addEventListener('click', function(){
    event.target.style.border = "thick solid black";
    console.log('clicked it');
})

//9.
destinationText.forEach(function(text){
    text.addEventListener('click', function(){
            event.target.style.fontStyle = 'italic';
            event.target.style.color = 'green'
        });
        console.log('its been touched');
});

//10.
window.addEventListener("load", function(event) {
    console.log("The page has loaded");
  });

// prevent default
let NavAnchors = document.querySelectorAll('a');
NavAnchors[1].addEventListener('click', e=> {
    console.log('nav button prevented refresh');
    e.preventDefault();
});

 

//stop propagation
let h2 = document.querySelectorAll('h2');

let textContentDivs = document.querySelector('.text-content');
textContentDivs.addEventListener('dblclick', e => {
        textContentDivs.style.backgroundColor='lightgrey';
        console.log('double clicked')
        
})
h2[1].addEventListener('mousedown', e=> {
    h2[1].style.backgroundColor='grey';
    e.stopPropagation();
    console.log('stop prop')
    });

