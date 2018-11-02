// Your code goes here

//Sign Up Thank You
const signUp = document.querySelectorAll('.btn');

signUp.forEach(btn => btn.addEventListener('click', function() {
  alert('Thank You For Signing Up!');
}));


//Hello World Easter Egg
const keyLog = [];

window.addEventListener('keypress', function(event) {
  keyLog.push(event.key);
  console.log(keyLog.join(''))
  if(keyLog.join('') === 'hello world') {
    alert('Hello Back To You');
  }
})
