// Your code goes here
const home = document.querySelector('.home');
const logo = document.querySelector('.logo-heading');
const busImg = document.querySelector('.bus-img')
const myButton = document.querySelector('.btn');
const aTag = document.querySelectorAll('a');
const advImg = document.querySelector('.adv-img');
const funImg = document.querySelector('.fun-img');
const boatImg = document.querySelector('.boat-img');
const footer = document.querySelector('.footer');
const pick = document.querySelector('.pick');

logo.addEventListener('mouseover', function(e) {
    TweenMax.to(".logo-heading", 2, 
    {boxShadow:"0px 0px 20px blue", 
    color:"#FC0",
    rotation: 360
});
});

busImg.addEventListener('dblclick', function(e) {
    TweenMax.to(".bus-img", 5, 
    {boxShadow:"0px 0px 20px blue", 
    color:"#FC0",
    
    width:"50%", 
    height:"150px",
    ease: Bounce.easeIn,
        x:350,
        opacity:0.7,

});
});

advImg.addEventListener('mouseover', function(e) {
    TweenMax.to(".adv-img", 2, 
    {boxShadow:"0px 0px 20px blue", 
    color:"#FC0",
    rotation: 360
});
});

funImg.addEventListener('mouseover', function(e) {
    TweenMax.to(".fun-img", 2, 
    {boxShadow:"0px 0px 20px blue", 
    color:"#FC0",
    rotation: 360
});
});

boatImg.addEventListener('mouseover', function(e) {
    TweenMax.to(".boat-img", 5, 
    {boxShadow:"0px 0px 20px blue", 
    color:"#FC0",
    width:"40%", 
    height:"150px",
    ease: SteppedEase.config(12),
    x:350,
    opacity:0.7,

});
});

boatImg.addEventListener('mouseover', function(e) {
    TweenMax.from(".boat-img", 5, 
    {
    ease: SteppedEase.config(12),
    x:100,
    opacity:0.7,

});
});


aTag[0].addEventListener('click', function(e) { 
    e.preventDefault();
  TweenMax.to(".nav-link", 2, 
    {boxShadow:"0px 0px 20px blue", 
    color:"#FC0",
    rotation: 360
});

});

home.addEventListener('click', function(e) {  
  e.target.style.backgroundColor = 'lightGray';
});

home.addEventListener('scroll', function(e) {  

    e.target.style.backgroundColor = 'lightGray';
  });


myButton.addEventListener('click', function(e) {
  e.stopPropagation();
  TweenMax.to(".destination", 5, {
    x:300,
    opacity:0.7,
  });
});

footer.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "lightBlue";
})

pick.addEventListener('select', function(e){
    e.target.style.backgroundColor = "lightBlue";
})
  
