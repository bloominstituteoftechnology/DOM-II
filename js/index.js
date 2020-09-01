// Your code goes here

const buttons = (document.getElementsByClassName('btn'));
const nav = (document.getElementsByTagName('nav'))
const images = (document.getElementsByTagName('img'))
const paragraphs = (document.getElementsByTagName('p'))
const navlinks = (document.getElementsByClassName('nav-link'));
const pickdestination = (document.getElementsByClassName('content-destination'));
const h4s = (document.getElementsByTagName('h4'));
//has 3 event listeners here on the buttons
buttons[0].addEventListener('click', function(event){
    buttons[0].textContent = 'NO';
    event.stopPropagation()
})
buttons[1].addEventListener('mouseover', function(event){
    buttons[1].textContent = 'Dont even think about it';
})
buttons[2].addEventListener('click', function(event){
    buttons[2].textContent = 'try double clicking';
    event.stopPropagation()
})
buttons[2].addEventListener('dblclick', function(event){
    buttons[2].textContent = 'nope';
})
//messes with content destination when you scroll too much
document.addEventListener('scroll', function(event){
    h4s[0].textContent = 'getting dizzy';
    setTimeout(function(){
        h4s[0].textContent = 'thats better';
        setTimeout(function(){
            h4s[0].textContent = 'Fun in the Sun'
        }, 1000);
    }, 1000);
    }
)
//does thing when you press a key
document.addEventListener('keydown', function(event){
    paragraphs [0].textContent = 'stop pressing things this isnt a video game'
})
//changes it back
document.addEventListener('keyup', function(event){
    paragraphs[0].textContent = 'Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.'
})
paragraphs[1].addEventListener('mouseenter', function(event){
    paragraphs[1].textContent = 'dont touch me'
})
paragraphs[1].addEventListener('mouseleave', function(event){
    paragraphs[1].textContent = 'thats better'
})
paragraphs[2].addEventListener('mousemove', function(event){
    paragraphs[2].textContent = 'stop moving around so much'
})
paragraphs[3].addEventListener('cut', function(event){
    paragraphs[3].textContent = 'Ouch! You cut me!'
})
paragraphs[3].addEventListener('copy', function(event){
    paragraphs[3].textContent = 'Hey no cheating!'
})
document.addEventListener('click', function(event){
    paragraphs[4].textContent = 'you clicked the wrong thing'
})
Array.from(document.links).forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault()
    })
  })