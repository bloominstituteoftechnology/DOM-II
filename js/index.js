// Your code goes here

// mouseover
document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("mouseover", function(e){
    e.target.style.color = "green"; setTimeout(function(){e.target.style.color ="";}, 500);}, false)
});


// keydown
const root = document.querySelector('html');
root.addEventListener('keydown', event => { 
            event.target.style.background = 'red';
        setTimeout(function() {
            event.target.style.background = "";
        }, 500);
        });

// wheel
window.addEventListener('wheel', (e) => {
    console.log('Wheelin');
  });


// drag / drop
window.addEventListener('drag', (e) => {
    console.log('drag');
  });

// load
window.addEventListener('load', (e) => {
    console.log('load');
  });

// focus
window.addEventListener('focus', (e) => {
    console.log('focus');
  });

// resize
window.addEventListener('resize', (e) => {
    console.log('resize');
  });

// scroll
window.addEventListener('scroll', (e) => {
    console.log('scroll');
  });

// select
document.querySelectorAll('img').forEach(function(img){img.addEventListener("mousedown", function(e){
    img.className = "zoom";
  })});

// dblclick
document.querySelectorAll('img').forEach(function(img){img.addEventListener("dblclick", function(e){
    img.className = "spin";
})});
