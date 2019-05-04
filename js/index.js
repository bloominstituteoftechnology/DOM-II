// Your code goes here
let header = document.querySelector('header');
let logoHeading = document.querySelector('.logo-heading');

//console.log(header);

//
header.addEventListener("dblclick", function(){
    //console.log("this worked");
    header.style.backgroundColor = "red";
});

//
logoHeading.addEventListener("hover", function(){
    console.log("Scrolling works");
});



