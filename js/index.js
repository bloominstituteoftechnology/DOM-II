// Your code goes here
let header = document.querySelector('header');
let logoHeading = document.querySelector('.logo-heading');
let btn1 = document.querySelector('.destination .btn');

console.log(btn1);

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



