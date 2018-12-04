// Your code goes here
//Mouseover

const aTag =document.querySelectorAll("a");
const img = document.querySelectorAll(".intro");
const h2= document.querySelector(".content-destination");
const h1 = document.querySelector("h1");
const btn=document.querySelectorAll(".btn");
const dest = document.querySelector(".destination");


//mouseover- when mousover content-destination text will turn red
h2.addEventListener("mouseover", function (e) {
    h2.style.color= "red";
})
// dblclick when you double click fun bus the text will turn purple
h1.addEventListener('dblclick', function (e) {
    e.preventDefault();
    e.target.style.color ='purple';
});
//when you click on home it will turn blue and wont open another page
aTag[0].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color='blue';
    console.log ("Home Fited");
});


//when you click on about us it will turn red and wont open another page
aTag[1].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color= 'red';
    console.log ("did this work?");
})

//when you click on blog it will turn green and wont open another page
aTag[2].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color= 'green';
    console.log ("did this work?");
})
//when you click on contact it will turn orange and wont open another page
aTag[3].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color= 'orange';
    console.log ("did this work?");
})



btn[0].addEventListener('focus', function (e) {
    e.preventDefault();
    e.target.style.background= 'yellow';
    console.log("button working");
}, true);

btn[1].addEventListener('select', function (e) {
    e.preventDefault();
    e.target.style.color= 'black';
    console.log("button working");
})
//When you move the mouse over the button the text will turn red
btn[2].addEventListener('mousemove', function (e) {
    e.preventDefault();
    e.target.style.color= 'red';
    console.log("button working");
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