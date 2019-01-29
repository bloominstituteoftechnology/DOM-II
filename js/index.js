// Your code goes here

// mouseover
document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("mouseover", function(e){
    e.target.style.color = "green"; setTimeout(function(){e.target.style.color ="";}, 500);}, false)
});


// keydown
const blinkRed = document.querySelector('html');

blinkRed.addEventListener(
    "keydown", 
        event => { 
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



//Anytime you right click...

document.body.addEventListener("contextmenu", function(e){
  alert("Right Click");
});


//When copying text page, alerts user with request for credit

// document.querySelectorAll('p').forEach(function(text){text.addEventListener("copy", function(e){
//     alert("Please acknowledge our copytradepatent on these words");
//   })});
  
//When you press mouse button down on image, it scales up to 1.05 times its normal size...


//This event lets page fade in on load


