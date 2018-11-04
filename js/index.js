// Your code goes here
const h1 = document.querySelector('.logo-heading');
const body = document.querySelector('body');
const sandBus = document.querySelector('.intro img');
const button = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const anchors = document.querySelectorAll('a');
const focusMe = document.querySelector('#focusMe');
const selectMe = document.querySelector('#selectMe');

//Hovering cursor over 'Fun Bus' title toggles a palette of text colors
h1.addEventListener('mouseover', function(event){
    h1.classList.toggle('logo-colors');
    setTimeout(function(){
        h1.classList.toggle('logo-colors');
    }, 6000)
})

//Toggles website dark palette by pressing '-'
body.addEventListener('keydown', function(event){
    const keyName = event.key;
    if(keyName === '-'){
        body.classList.toggle('dark-mode');
    }
})

//Bus img disappears
sandBus.addEventListener('wheel', function(event){
    sandBus.classList.toggle('vrooom');
})

//drag
body.addEventListener('dragstart', function(event){
    alert(`Don't drag me bro!`)
})

//After loading the page a msg pops up
window.addEventListener('load', function(event){
    alert('Loading Done! Click the button to continue!');
})

//focus
focusMe.addEventListener('focus', function(event){
    event.target.style.background = 'yellow';
})

focusMe.addEventListener('blur', function(event){
    event.target.style.background = "";
})

//resize
window.addEventListener('resize', function(event){
    alert('Hello there!');
})

//scroll
window.addEventListener('scroll', function(event){
    anchors.forEach(function(anchor){
        anchor.style.color = "blue";
    })
})

// select
selectMe.addEventListener('select', function(event){
    alert("Thanks bro!");
})


//Dblclicked text changes colors except for h1
body.addEventListener('dblclick', function(event){
    const cursorTarget = event.target;
    console.log(cursorTarget)
    if(cursorTarget === h1){
    }else{
      if(cursorTarget.style.color === 'black' 
      || cursorTarget.style.color === 'white'){
          cursorTarget.style.color = 'khaki';
      }else{
          cursorTarget.style.color = 'black';
      }
}
})

