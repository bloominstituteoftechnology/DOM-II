import './less/index.less'

// Your code goes here!

// NAV mouse over... 

const navAnchor = document.querySelectorAll('.nav-link');
// console.log('nav:', navAnchor);

navAnchor.forEach(ele => {
  ele.addEventListener('mouseover', function() {
    ele.classList.add('nav-link-mouse-over')
  })
})


//Image popup.

const images = document.querySelectorAll('img')
console.log(images)


// function mouseOver (ele){
//     ele.style.transform = "scale(1.2)";
//     ele.style.trasition = "all 0.3s";
//   }
images.forEach(val => val.addEventListener('mouseover', function(){
  val.style.transform = "scale(1.2)"
  val.style.trasition = "all 0.3s";
}))
images.forEach(val => val.addEventListener('mouseout', function(){
  val.style.transform = "scale(1)"
}))


// footer wheel event

const copyright = document.querySelector('footer p');
copyright.addEventListener('wheel', function() {
  copyright.style.fontSize = '2rem';
})


// // bttn click
// const formSample = document.querySelector('.new-form off');
// console.log(formSample);
// const bttn = document.querySelectorAll('.btn');
// bttn.forEach(ele => {
//   console.log('fire');
//   ele.addEventListener('click', function(){
//     formSample.classList.remove('off');
//   })
// })
// console.log('button:', bttn)
// bttn.addEventListener('click', event => {
//   event.forEach(ele => ele.classList.remove('off'))
// })

//password focus & blur
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', function() {
  console.log('fire pass');
  password.style.background = 'green';
});

password.addEventListener('blur', function() {
  password.style.background = '';
});

// form esc
const form = document.querySelector('form')
console.log(form);
form.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    form.classList.add('off')
  }
})