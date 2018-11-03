// Your code goes here
const h1 = document.querySelector('.logo-heading');
const body = document.querySelector('body');
const sandBus = document.querySelector('.intro img');
const button = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const anchors = document.querySelectorAll('a');

//Hovering cursor over 'Fun Bus' title toggles a palette of text colors
h1.addEventListener('mouseover', function(event){
    h1.classList.toggle('logo-colors');
    //need to remove class before next mouseover
})

//Toggles website dark palette by pressing '-'
body.addEventListener('keydown', function(event){
    const keyName = event.key;
    if(keyName === '-'){
        body.classList.toggle('dark-mode');
    }
    //Need to fix colors
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
// button.addEventListener('click',function(event){
//     button.focus();
// })
// button.addEventListener('focus', function(event){
//     alert("Pysche!!!!")
// })

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

//select
// anchors.addEventListener('select', function(event){
//     anchors.forEach(function(anchor){
//         anchor.style.color = "black";
//     })
// })


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

