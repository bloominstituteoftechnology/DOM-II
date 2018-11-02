// Your code goes here

//Sign Up Thank You
const signUp = document.querySelectorAll('.btn');

signUp.forEach(btn => btn.addEventListener('click', function() {
  alert('Thank You For Signing Up!');
}));


//Hello World Easter Egg (Click Window Type hello world)
const keyLog = [];

window.addEventListener('keypress', function(event) {
  keyLog.push(event.key);
  console.log(keyLog.join(''))
  if(keyLog.join('') === 'hello world') {
    alert('Hello Back To You');
  } else if (keyLog.length > 11) {
    for(let i = 0; i < keyLog.length;) {
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
const letsGoImg = document.querySelector('.logo-heading');

  letsGoImg.addEventListener('click', function() {
    TweenMax.to(".logo-heading", 1.5, {rotationX:720});
});
