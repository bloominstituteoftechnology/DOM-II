// Your code goes here'

//On mousing over the nav links, change color

document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("mouseover",
  function(e){
          e.target.style.color = "red";
          setTimeout(function(){e.target.style.color ="";}, 500);
        },
  false);
});

//Prevent anchor tags in nav from refreshing page

document.querySelectorAll('nav a').forEach(function(link){link.addEventListener("click",
  function(e){
    e.preventDefault();
  }
)});

//Anytime you right click...

document.body.addEventListener("contextmenu", function(e){
  alert("Whatcha doin' there...?");
});

//for purposes of using stopPropagation(), in next part
document.querySelectorAll('.container ').forEach(function(heading){heading.addEventListener("copy",
 function(e){
  alert("Don't copy my headings!");
 }
)});

//When copying text page, alerts user with request for credit

document.querySelectorAll('p').forEach(function(text){text.addEventListener("copy",
  function(e){
    alert("Be sure to give us credit for that!");
    e.stopPropagation();

  }
)});

//When you press mouse button down on image, it scales up to 1.05 times its normal size...

document.querySelectorAll('img').forEach(function(img){img.addEventListener("mousedown",
  function(e){
    img.className = "zoom";
  }
)});

//...then when you release the button, it goes back to normal.

document.querySelectorAll('img').forEach(function(img){img.addEventListener("mouseup",
  function(e){
    img.className = "";
  }
)});

//As you scroll...

var counter = 0;
window.addEventListener('scroll',
  function(e){
    counter++;
    if(counter%60===0){
      alert("You've gone a ways...");
    }
  }
);

//Double click the images for a surprise...

document.querySelectorAll('img').forEach(function(img){img.addEventListener("dblclick",
  function(e){
  img.className = "spin";
}
)});

//A friendly reminder after the above surprise plays out...

document.querySelectorAll('img').forEach(function(img){img.addEventListener("animationend",
 function(e){
    setTimeout(function(){alert("It's FUUUNNN!");}, 100);
  }
)});

//This event lets page fade in on load

window.addEventListener("load",
  function(e){
    document.body.className = "";
  }
);

//This event lets page reset the body's class name so it will fade in on reload

window.addEventListener("reset",
 function(e){
  document.body.className = "fade";
 }
);
