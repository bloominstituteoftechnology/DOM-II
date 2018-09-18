// Your code goes here


//lock the page
const wholePage = document.querySelector('body');
const funBus = document.querySelector('#funBus');
const signUpButton = document.querySelectorAll('.btn');
const intro = document.querySelector('.intro');
const search = document.querySelector(".fa-search");
const destHeader = document.querySelectorAll('.destination h4')


//locks up the page | doesnt allow scrolling
wholePage.addEventListener('wheel', (e) => {
//   e.preventDefault();  
})

//changes the text in the intro section to red
intro.addEventListener("mouseover", function( e ) {
    e.target.style.color = 'red';
});


//console logs to when the page is loaded
window.addEventListener('load', function( e ) {
    console.log('All Done!');
});

//console log fat shamming message
window.addEventListener('resize', function( e ) {
    console.log('Can\'t you just love me the way I am')
})

//moves buttons parent elements towards the right
signUpButton.forEach(e => {
    e.addEventListener('dblclick', function( event ) {
        event.target.parentNode.style.order = '1';
    })
})

//sets button parent elements back to 0
destHeader.forEach(e => {
    e.addEventListener('mouseleave', function( event ) {
        event.target.parentNode.style.order = '0';
    })
})

