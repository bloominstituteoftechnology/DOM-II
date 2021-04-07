// Your code goes here
//BLUES-CLUES
const intro = document.querySelector('.intro');

        //NOTE, Wheel will compete with mouseover if the scroll brings the mouse to hover over '.intro',
        //   ?technically a propagation as document is the parent and intro is the child with a warring event?
        //  don't want wheeling over .intro to call both
document.addEventListener('wheel', function(event){
    if(event.deltaY > 0){
        intro.style.background = 'blue';
    }
})

intro.addEventListener('mouseover', function(event){
    intro.style.background = 'lightblue';  
    event.stopPropagation()
}) 

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        intro.style.background = 'royalblue';
    }
})

document.addEventListener('keyup', function(event){
    if(event.key === 'Escape'){
        intro.style.background = 'dodgerblue';
    }
})

intro.addEventListener('click', function(event){
    intro.style.background = 'aqua';
})

intro.addEventListener('dblclick', function(event){
    intro.style.background = 'cornflowerblue';
})

intro.addEventListener('mouseleave', function(event){
    intro.style.background = 'darkslateblue';
})

//GREEN-CLUES   (COUSIN)
document.addEventListener('copy', function(event){
    intro.style.background = 'darkgreen';

})
document.addEventListener('drag', function(event){
    intro.style.background = 'lime';
})

document.addEventListener('dragend', function(event){
    intro.style.background = 'seagreen';
})

//Defaults
document.querySelector('nav').preventDefault()
