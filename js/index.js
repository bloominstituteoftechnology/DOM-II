let getStarted = document.getElementById("getStarted");
let ctaImg = document.getElementById("cta-img");
let allP = document.getElementsByTagName("p");
let middleImg = document.getElementById("middle-img");


//Click on Get Started Button
getStarted.addEventListener("click", () => {
  // TweenLite.from("#cta-img", 1.5, {scaleX:2, scaleY:2});
  // TweenLite.to(ctaImg, 1.5, { ease: Bounce.easeOut, y: 100 });
  // TweenMax.to(ctaImg, 1, {ease: Bounce.easeIn, y: 500, repeat:1, yoyo:true});
  TweenMax.to(ctaImg, 2.5, { ease: Elastic.easeOut.config(2, 0.5), y: 300, repeat:1, yoyo:true });
})


//Protects all texts inside de p tag to be copied
for(let i =0; i < allP.length ; i++) {
  allP[i].addEventListener('copy', function(e) {
      e.clipboardData.setData('text/plain', 'Sorry You are not allowed to copy our information!');
      e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
      alert(e.clipboardData.getData("text"));
  })
};

// pointerover event handler over middle image and rotates the cta-image
middleImg.addEventListener("pointerover", () => {
  TweenMax.to(ctaImg, 2, {rotation:360, repeat:1, yoyo: true});
});



//Scroll Event - rotates Dom Is Awesome
var last_known_scroll_position = 0;
var ticking = false;

function rotateDomAwesome(scroll_pos) {
  document.getElementById("domAwesome").style.transform = `rotate(${scroll_pos}deg)`;

}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;
  if (!ticking) {

    window.requestAnimationFrame(function() {
      rotateDomAwesome(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;

  }
  
});

//Trash can drag and drop

var drag = document.getElementById("paper-img");
var drop = document.getElementById("trash-img");

/* Events fired on the drag target */

drag.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
});

drag.addEventListener("drag", function(event) {
    document.getElementById("demo").innerHTML = "I'm being dragged.";
});

drag.addEventListener("dragend", function(event) {
  event.preventDefault();
  document.getElementById("demo").innerHTML = "Try more time, drag me to the trash can.";
});


/* Events fired on the drop target */
drop.addEventListener("dragover", function(event) {
    event.preventDefault();
    document.getElementById("demo").innerHTML = "I'm over the trash can.";
    // event.target.setAtti;
    drop.setAttribute("src", "img/full.png");
});

drop.addEventListener("dragleave", function(event) {
  event.preventDefault();
  document.getElementById("demo").innerHTML = "I'm out of the trash can.";
  drop.setAttribute("src", "img/empty.png");
});

drop.addEventListener("drop", function(event) {
    var id = event.dataTransfer.getData("Text");
    if(id === 'paper-img'){
      event.target.appendChild(document.getElementById(id));
      document.getElementById("demo").innerHTML = "I was dropped on the trash can.";
    } else {
      drop.setAttribute("src", "img/empty.png");
      document.getElementById("demo").innerHTML = "I'm not trash.";
    }
});