// Your code goes here
let header = document.querySelector('header');
let logoHeading = document.querySelector('.logo-heading');
let btn1 = document.querySelector('.destination .btn');

let intro =document.querySelector(".intro");

let headerImg = document.querySelector(".intro img");

let headerTxt = document.querySelector(".intro p");

//

headerTxt.addEventListener("select", function(){
headerTxt.style.color = "orange"});

//
header.addEventListener("dblclick", function(){
    //console.log("this worked");
    header.style.backgroundColor = "red";
});

//
logoHeading.addEventListener("mouseover", function(){
    console.log("Mouseover works");
    logoHeading.style.color = "green";
});


btn1.addEventListener("wheel",function(){
    btn1.style.width = "400px";
})

intro.addEventListener("mouseover", function(){
    intro.style.backgroundColor = "blue";
})

headerImg.addEventListener("drag",function(){
    headerImg.style.border = "22px solid orange";
})



