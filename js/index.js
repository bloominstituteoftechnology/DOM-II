// Your code goes here

// Mouseover -------------------
const logo = document.querySelector('.logo-heading');
logo.addEventListener("mouseover",function(event){
    event.target.style.color = "pink"; 

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

// Animate ---------------

const welcome = document.querySelector(".intro h2").animate([
    
    { transform: 'translateY(-100px)' },
    { transform: 'translateY(0px)' }
  ], {
   
    duration: 1000,
    iterations: 1
  });

// Animate
const seconed = document.querySelector(".content-section h2").animate([
    
    { transform: 'translateX(-200px)' },
    { transform: 'translateY(0px)' }
  ], {
   
    duration: 1000,
    iterations: 1
  });

  // MouseEnter===============================
const mouseTarget = document.querySelector('.content-destination');
mouseTarget.addEventListener('mouseenter', e => {
mouseTarget.style.border = '4px dotted blue'
});

// click================================

const clicker = document.querySelector('.nav-link:nth-of-type(1)');

clicker.addEventListener('click', event => {
  clicker.style.color = 'red';
});

const clicker2 = document.querySelector('.nav-link:nth-of-type(2)');

clicker2.addEventListener('click', event => {
  clicker2.style.color = 'blue';
});

const clicker3 = document.querySelector('.nav-link:nth-of-type(3)');

clicker3.addEventListener('click', event => {
  clicker3.style.color = 'green';
});

const clicker4 = document.querySelector('.nav-link:nth-of-type(4)');

clicker4.addEventListener('click', event => {
  clicker4.style.color = 'yellow';
});


// ============================== secret message

const footer = document.querySelector('footer')
footer.addEventListener('dblclick',function (e){
    console.log('smelly foot :)');
});


Array.from(document.links).forEach(link =>{
    link.addEventListener('click', function(event){
        event.preventDefault();
    })
})

// delete
const bus = document.querySelector('.intro img')
function escKey(event) {
  if(event.key === 'Escape'){
    bus.style.display = 'none';
  }
}
document.addEventListener('keydown', escKey);


Array.from(document.links).forEach(link => {
  link.addEventListener('click', function(event){
    event.preventDefault();
  })
})