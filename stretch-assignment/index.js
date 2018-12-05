let blockred = document.querySelector(".block--red");
let blockblue = document.querySelector(".block--blue");
let blockgreen = document.querySelector(".block--green");
let blockpink = document.querySelector(".block--pink");
let blockgray = document.querySelector(".block--gray");
let body = document.querySelector("body");

redTop = true;
blueTop = false;
greenTop = false;
pinkTop = false;
grayTop = false;

mousedown = false;

let otherBlocks = [blockred, blockblue, blockgreen, blockpink]; //needs to equal all the other blocks except the one moving up


blockpink.addEventListener("mousedown", function() {
    pinkAnim.play();
  });

var pinkAnim = new TimelineMax({
    paused: true,
    onComplete: function() {
      TweenMax.to(blockpink, 1, {fill: 'green'});
    }
  });
  
  pinkAnim.fromTo(
    blockpink,
    7,{
      x: 0,
      transformOrigin: "0% 50%"
    },{
      x: 3000,
      ease: Linear.easeNone
    }, 0);
  
  body.addEventListener("mouseup", reversepinkAnim);
  blockpink.addEventListener("mouseleave", reversepinkAnim);
  
  function reversepinkAnim() {
    pinkAnim.reverse();
  } 

  // RED

blockred.addEventListener("mousedown", function() {
    redAnim.play();
  });

var redAnim = new TimelineMax({
    paused: true,
    onComplete: function() {
      TweenMax.to(blockblue, 1, {fill: 'green'});
    }
  });
  
  redAnim.fromTo(
    blockred,
    7,{
      x: 0,
      transformOrigin: "0% 50%"
    },{
      x: 3000,
      ease: Linear.easeNone
    }, 0);
  
  body.addEventListener("mouseup", reverseRedAnim);
  blockred.addEventListener("mouseleave", reverseRedAnim);
  
  function reverseRedAnim() {
    redAnim.reverse();
  } 
  
  // BLUE

   
  blockblue.addEventListener("mousedown", function() {
    blueAnim.play();
  });



var blueAnim = new TimelineMax({
    paused: true,
    onComplete: function() {
      TweenMax.to(blockblue, 1, {fill: 'green'});
    }
  });
  
  blueAnim.fromTo(
    blockblue,
    7,{
      x: 0,
      transformOrigin: "0% 50%"
    },{
      x: 3000,
      ease: Linear.easeNone
    }, 0);
  
  body.addEventListener("mouseup", reverseblueAnim);
  blockblue.addEventListener("mouseleave",reverseblueAnim);
  
  function reverseblueAnim() {
    blueAnim.reverse();
  } 


    // GREEN

   
    blockgreen.addEventListener("mousedown", function() {
        greenAnim.play();
      });
    
    
    
    var greenAnim = new TimelineMax({
        paused: true,
        onComplete: function() {
          TweenMax.to(blockgreen, 1, {fill: 'green'});
        }
      });
      
      greenAnim.fromTo(
        blockgreen,
        7,{
          x: 0,
          transformOrigin: "0% 50%"
        },{
          x: 3000,
          ease: Linear.easeNone
        }, 0);
      
      body.addEventListener("mouseup", reverseGreenAnim);
      blockgreen.addEventListener("mouseleave", reverseGreenAnim);
      function reverseGreenAnim() {
        greenAnim.reverse();
      } 

    // GRAY

   
blockgray.addEventListener("mousedown", function() {
    grayAnim.play();
    });

var grayAnim = new TimelineMax({
    paused: true,
    onComplete: function() {
        TweenMax.to(blockgray, 1, {fill: 'green'});
    }
    });
    
    grayAnim.fromTo(
    blockgray,
    7,{
        x: 0,
        transformOrigin: "0% 50%"
    },{
        x: 3000,
        ease: Linear.easeNone
    }, 0);
    
    body.addEventListener("mouseup", reverseGrayAnim);
    blockgray.addEventListener("mouseleave", reverseGrayAnim);
    function reverseGrayAnim() {
    grayAnim.reverse();
    } 