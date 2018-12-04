// Your code goes here
//Mouseover

const aTag =document.querySelectorAll("a");
const img = document.querySelectorAll(".intro");
const h1 = document.querySelector("h1");

h1.addEventListener('dblclick', function (e) {
    e.preventDefault();
    e.target.style.color ='purple';
});

aTag[0].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color='blue';
    console.log ("Home Fited");
});



aTag[1].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color= 'red';
    console.log ("did this work?");
})

aTag[2].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color= 'green';
    console.log ("did this work?");
})
aTag[3].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color= 'orange';
    console.log ("did this work?");
})










/*

 keydown
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick
 */