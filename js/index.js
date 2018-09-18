// Your code goes here
const logo = document.getElementById('logo');
const nav = document.querySelectorAll('nav a');
const headerImg = document.getElementById('header-img');
const adventureImg = document.getElementById('adventure-img');
const funImg = document.getElementById('fun-img');
const destinationHeading = document.getElementById('destination-heading');
const destinationImg = document.getElementById('destination-img');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const mountain = document.getElementById('mountain');


//logo fade in animation (1 - on load)
function setup(){
  TweenMax.from(logo, 5, {css:{opacity:0}, ease:Power1.easeInOut})
};

window.addEventListener('load', setup);

//navigation items for hover (2 - mouseenter and 3 - mouseleave)
function navigationScale(){
  this.style.transform = 'scale(1.5, 1.5)';
  this.addEventListener('mouseleave', navigationNormal);
}

function navigationNormal(){
  this.style.transform = 'scale(1,1)';
}

//adding event listeners to each nav item for the scale and preventing default behavior.
nav.forEach(item =>{
  item.addEventListener('mouseenter', navigationScale);
  item.addEventListener('click', function(event){
    event.preventDefault();
  })
})

// nav.forEach(item =>{
//   item.preventDefault();
// })

//busflip (4 - contextmenu)
function busFlip(){
  this.style.transform = 'rotate(180deg)';
}

headerImg.addEventListener('contextmenu', busFlip, {once:true});
headerImg.addEventListener('contextmenu', function(event){
  event.preventDefault();
})

//logo bounce (5 - doubleclick)
function logoflip(){
  TweenMax.to(logo, 1, {rotation: 360});
  logo.addEventListener('mouseleave', function(){
      TweenMax.to(logo, 1, {rotation:0});
  });

}

logo.addEventListener('dblclick', logoflip);
logo.addEventListener('dblclick', function(event){
  event.preventDefault();
});

//signup buttons wiggle (6 - on click) + stop propagation;
function buttonWiggle1(){
  let tl = new TimelineMax({repeat:0})
  .to(button1, 0.7, {rotation:30})
  .to(button1,7,{rotation:0,ease:Elastic.easeOut.config(0.9,0.1)});
};

function buttonWiggle2(){
  let tl2 = new TimelineMax({repeat:0})
  .to(button2, 0.7, {rotation:30})
  .to(button2,7,{rotation:0,ease:Elastic.easeOut.config(0.9,0.1)});
};

function buttonWiggle3(){
  let tl3 = new TimelineMax({repeat:0})
  .to(button3, 0.7, {rotation:30})
  .to(button3, 7,{rotation:0, ease:Elastic.easeOut.config(1,0.1)});
};

button1.addEventListener('click', buttonWiggle1);
button2.addEventListener('click', buttonWiggle2);
button2.addEventListener('click', function(event){
  event.stopPropagation();
})
button3.addEventListener('click', buttonWiggle3);

//event for the stop propagation item (so still 6 - click)
function moveMountain(){
  let tl4 = new TimelineMax({repeat:0})
  .to(mountain, 2, {scale:1.25})
  .to(mountain, 2, {scale:1});
}

mountain.addEventListener('click', moveMountain);

//header wiggle (7 - scroll)
function headerWiggle(){
  let tl5 = new TimelineMax({repeat:0})
  .to(headerImg,  1, {rotation:190})
  .to(headerImg, 2,{rotation:0, ease:Power1.easeOut});
}

window.addEventListener('scroll', headerWiggle);

//destination img move right on (8 - mouse down) and back on (9 - mouseup)
  let curLeft = 1;
  function imgShift(){
    go = setInterval(function(){
        curLeft = parseInt(curLeft) + 10;
        destinationImg.style.marginLeft = curLeft + 'px';
        return curLeft;
    }, 100);

  window.addEventListener('mouseup', function(){
      if (go) clearInterval(go);
      curLeft = 0;
      destinationImg.style.marginLeft = '0px';
    })
};

destinationImg.addEventListener('mousedown', imgShift)

//middle image flip on (10 - keydown) and back (on BONUS 11 - keyup)
function middleWiggle1(){
 TweenMax.to(adventureImg,  2, {rotation:360});
 window.addEventListener('keyup', function(){
   TweenMax.to(adventureImg, 2, {rotation: 0});
 });
}

function middleWiggle2(){
    TweenMax.to(funImg,  .7, {rotation:360});
    window.addEventListener('keyup', function(){
      TweenMax.to(funImg, 2, {rotation: 0});
    });
}

window.addEventListener('keydown', middleWiggle1);
window.addEventListener('keydown', middleWiggle2);
