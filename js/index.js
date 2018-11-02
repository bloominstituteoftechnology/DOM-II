// Your code goes here

//Sign Up Thank You
const signUp = document.querySelectorAll('.btn');

signUp.forEach(btn => btn.addEventListener('click', function(event) {
  event.target.innerText = 'Thank You!';
}));


//Hello World Easter Egg (Click Window Type hello world)
const keyLog = [];

window.addEventListener('keypress', function(event) {
  keyLog.push(event.key);
  console.log(keyLog.join(''))
  if(keyLog.join('') === 'hello world') {
    alert('Hello Back To You');
  } else if (keyLog.length > 10) {
    for(let i = 0; i !== keyLog.length;) {
      keyLog.pop();
    }
  }
})


//Plagiarism protection against copy on all paragraphs
const textContentP = document.querySelectorAll('p');

textContentP.forEach(text => text.addEventListener('copy', function(event) {
    event.target.innerText = "Plagiarism  is wrong!"
    event.target.style.fontSize = '72px';
}));


//Banner image sizer, scroll up to increase, down to decrease
const banner = document.querySelector('img');

banner.addEventListener('wheel', function() {
  let width = event.target.width;

  if(event.wheelDelta > 0) {
    banner.style.width = (width + 10).toString() + 'px';
  } else {
    banner.style.width = (width - 10).toString() + 'px';
  }
});

//Logo Flip on Click
const logoImg = document.querySelector('.logo-heading');

logoImg.addEventListener('dblclick', function() {
    TweenMax.to(".logo-heading", 1.5, {rotationX:720});
});

//Image rotates, grows, and becomes more opaque upon load
const letsGoImg = document.querySelector('.img-content img');

letsGoImg.addEventListener('load', function() {
  TweenMax.from(letsGoImg, 1, {rotationY: 1080});
  TweenMax.from(letsGoImg, 1, {opacity: 0});
  TweenMax.from(letsGoImg, 1, {scale: 0.25});
})


//Image rotates to flat upon mouse enter, returns to normal view with animation on mouse off
const adventureImg = document.querySelectorAll('.img-content')[1];
const tween = TweenMax.fromTo(adventureImg, 1, {x: 0, rotationX: 0}, {x: -250, rotationX:90});
tween.pause();

adventureImg.addEventListener('mouseover', function() {
  tween.resume();
});

adventureImg.addEventListener('mouseout', function() {
  tween.reverse();
});
