// Your code goes here


//intro mouseenter, keydown
const busImg = document.querySelector('.intro img');
const introSection = document.querySelector('.intro');
const introHeading = document.querySelector('.intro h2');

busImg.addEventListener('mouseenter', function(event) {
    event.target.style.transform = 'scale(.8)';
    event.target.style.transition = 'all .4s ease-out';
    introSection.style.background = `rgba(237, 201, 175, .4)`;
    introSection.style.transition = 'all .4s ease-out';
});

document.addEventListener('keydown', function(event){
    //console.log(event);
    introHeading.style.color = '#756345';
    introHeading.style.fontSize = '5rem';
});


//text - content wheel event
const textContent = document.querySelectorAll('.text-content');

document.addEventListener('wheel', function(event){
    //  textContent[0].style.background = '#fff9ef';
    //  textContent[0].style.transition = 'all .3s ease-out';
    //  textContent[0].style.transitionDelay = '3s';

    //  textContent[1].style.background = '#fff9ef';
    //  textContent[1].style.transition = 'all .3s ease-out';
    //  textContent[1].style.transitionDelay = '3s';

     for(let i = 0; i<textContent.length; i++){
        textContent[i].style.background = '#fff9ef';
        textContent[i].style.transition = 'all .3s ease-out';
        textContent[i].style.transitionDelay = '3s'
     }

});

//content-destination scroll, dblclick 

const contentDestination = document.querySelector('.content-destination');
const scrolledHeading = document.querySelector('.content-destination h2');
const destination = document.querySelectorAll('.destination p');

contentDestination.addEventListener('dblclick', function(event){
    console.log(event);
    event.target.style.background = `rgba(237, 201, 175, .4)`;
});

window.addEventListener('scroll', function(){
    //console.log(textContent[]);
    for(let i = 0; i<3; i++){
    destination[i].style.background = 'rgba(237, 201, 175, .4)';
    }
});


//destination select 

// destination.addEventListener('select', function(event){
//         event.target.style.color = 'blue';
// });


const footerP = document.querySelector('footer p');
window.addEventListener('copy', function(event){
    footerP.style.color = 'pink';
});

// document.addEventListener('copy', () => {
//     alert("Copied to clipboard!");
// });

//resize
window.addEventListener('resize', function(event) {

    console.log('Testing');
    
});


//stop propagation
const nav = document.querySelector(".main-navigation .nav a");

nav.addEventListener("dblclick", function(event) {
  event.stopPropagation();
  event.preventDefault();
  event.target.style.fontSize = "40px";
});

window.addEventListener('dblclick', function(){
    alert('Dblclick');
});

