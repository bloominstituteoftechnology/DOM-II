// Your code goes here
//`mouseover`
//`keydown`
//`wheel`
//`drag / drop`
// `load`
//`focus`
 //`resize`
 //`scroll`
//`select`
//`dblclick`


//Page alert 1


function welcomeHere (){
    alert ("Welcome")
    
 }
 
 const welcome = document.addEventListener('load', welcomeHere());



 //Nav color change 2
const navColorChange = document.getElementsByClassName('nav-link');

console.log (navColorChange)
 

for(let i=0;i<navColorChange.length;i++){
navColorChange[i].addEventListener("mouseover", (event) => { event.target.style.color = 'blue'; })
navColorChange[i].addEventListener("mouseleave", (event) => { event.target.style.color = 'black'; })
 }

 // I am broken alert 3

 document.addEventListener("keydown", event => {
    if ( event.key === 'Enter') {
      return alert ("OH NO I am broken");
    } 
    
  });

  // Theme Button 4 
  const themeBtn = document.createElement('button')

  themeBtn.innerText="Random Backgrounds"

  document.body.prepend(themeBtn)

  themeBtn.style.color="white";
  themeBtn.style.background="black"
  themeBtn.style.width = "30%"
  themeBtn.style.height= "30px"
  const element=  document.querySelector(".home")
  function backgroundColor (){
    
        let x = Math.round(Math.random()*255);
        let y = Math.round(Math.random()*255);
        let z = Math.round(Math.random()*255);
      
    
      element.style.background = `rgba(${x},${y}, ${z})`;
            
      }
  themeBtn.addEventListener('click', backgroundColor)



//5 Bus img alert

const wheelsOnTheBus = document.querySelector('img')
function youMissedTheBus(){
 return alert("Sorry, you missed the bus =(")
}

wheelsOnTheBus.addEventListener('click',youMissedTheBus );

//6 rotate header

function rotateIt (){
headerTitle.style.transform= ("rotate(10deg)");


}
const headerTitle = document.querySelector(".logo-heading")
headerTitle.addEventListener('mouseover',rotateIt)
headerTitle.addEventListener('mouseleave', (event)=>{
  event.stopPropagation();
  
})


//7 audio when img clicked
var audio = new Audio("img/rainforest.ogg") ;


 function playMusic(){
audio.play();

}
audio.pause = function (){
  audio.play () = false;
}

const soundOfMusic = document.getElementsByTagName('img')



for (let i=0; i< soundOfMusic.length; i++){
  soundOfMusic[i].addEventListener('click',playMusic)
  soundOfMusic[i].addEventListener('dblclick',audio.pause)
}



//8 

function noEscape (){if (event.key === 'Escape'){
  return alert ("You can't ESCAPE the FUN BUS!")
}
}
document.addEventListener('keydown',noEscape)
//9
const getToThePointer = document.querySelector('footer');

getToThePointer.addEventListener('pointerover', (event) => {
  alert('Pointer moved in');
});
//10
const hearderBackground = document.querySelector('.nav-container')

hearderBackground.addEventListener('click', (e)=>{
  hearderBackground.style.backgroundColor = "purple"
})

headerTitle.addEventListener('click',(e) =>{
  headerTitle.style.backgroundColor = "pink"
  e.stopPropagation()
} )
  