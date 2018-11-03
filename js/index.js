// Your code goes here
let imgHeader = document.querySelector('.intro img');
let bus = document.querySelector('.bus');
let paragraphHeader = document.querySelector('.intro p');
let titleHeader = document.querySelector('.intro h2');
let imgAdventure = document.querySelector('.img-content img');
let btnSignUp = document.querySelectorAll('.btn');
let destinations = document.querySelectorAll('.destination');
let inverseContent = document.querySelector('.inverse-content');
let adventurePara = document.querySelector('.inverse-content div p');
let adventureTitle = document.querySelector('div.text-content:nth-of-type(2)');


imgHeader.addEventListener('click', function() {
  bus.classList.toggle('drive');
});

imgHeader.addEventListener('drag', function(event) {
  paragraphHeader.classList.add('dragged');
});

paragraphHeader.addEventListener('copy', function() {
  event.target.classList.add('greened');
});

titleHeader.addEventListener('wheel', function() {
  paragraphHeader.classList.remove('greened', 'dragged');
}); 

imgAdventure.addEventListener('dblclick', function() {
  TweenLite.to('.img-content:nth-of-type(2)', 3, {rotation:360});
});

btnArray = [];
btnSignUp.forEach(btn => {
  btnArray.push([]);
  btn.setAttribute('tabindex', '-1')
});

btnSignUp[0].addEventListener("keydown", function(event) {
  let indexRandom = Math.floor(Math.random() * 3);
  btnArray[indexRandom].push(event.key);
  btnSignUp[indexRandom].textContent = btnArray[indexRandom].join('');
});

btnSignUp[1].addEventListener('mouseover', function() {
  destinations.forEach(div => div.classList.toggle('hovered'));
})

btnSignUp[2].addEventListener('focus', function() {
  btnSignUp.forEach((btn, i) => {
    btnArray[i] = [];
    btn.textContent = 'Sign Me up!'
  })
});

inverseContent.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  event.currentTarget.classList.toggle('inverse-horizontal');
});

adventurePara.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  event.stopPropagation();
  adventureTitle.classList.toggle('inverse-vertical');
});