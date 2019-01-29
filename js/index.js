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


// drag / drop
window.addEventListener('drag', (e) => {
    alert("No stealing our assets!");
  });

// load
window.addEventListener('load', (e) => {
    document.querySelector('.main-navigation h1').style.color = 'blue';
  });

// focus
window.addEventListener('focus', (e) => {
    document.querySelector('img').style.display = 'none';
  });

// resize
window.addEventListener('resize', (e) => {

  });

// scroll
window.addEventListener('scroll', (e) => {
    document.querySelector('.main-navigation h1').style.color = 'red';
  });

// select
document.querySelectorAll('img').forEach(function(img){img.addEventListener("mousedown", function(e){
    img.className = "zoom";
  })});

// dblclick
document.querySelectorAll('img').forEach(function(img){img.addEventListener("dblclick", function(e){
    img.className = "spin";
})});
