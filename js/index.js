// Your code goes here

//Sign Up Thank You
const signUp = document.querySelectorAll('.btn');

let count = 0;
signUp.forEach(btn => btn.addEventListener('click', function() {
  alert('Thank You For Signing Up!')
}));
