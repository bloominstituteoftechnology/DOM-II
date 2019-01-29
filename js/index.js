// Your code goes here

// mouseover
document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("mouseover", function(e){
    e.target.style.color = "green"; setTimeout(function(){e.target.style.color ="";}, 500);}, false)
});


// keydown
const blinkRed = document.querySelector('html');
blinkRed.addEventListener("keydown", event => { 
            event.target.style.background = "red";
        setTimeout(function() {
            event.target.style.background = "";
        }, 500);
        });
        

// wheel


// drag / drop


// load


// focus


// resize


// scroll


// select
document.querySelectorAll('img').forEach(function(img){img.addEventListener("mousedown", function(e){
    img.className = "zoom";
  })});

// dblclick
document.querySelectorAll('img').forEach(function(img){img.addEventListener("dblclick", function(e){
    img.className = "spin";
})});