// Your code goes here
const nav = document.getElementsByTagName('a');
const home = nav[0];

for (let i =0; i<nav.length; i++)

home.addEventListener("mouseout", function(){
    home.style.color = "pink";
});

home.addEventListener("mouseover", function(){
    home.style.color = "green";
});

const about = nav[1];
about.addEventListener("select", function(){
    about.style.fontSize = "50px";
});

const pics = document.getElementsByTagName('img');
const bus = pics[0];

bus.addEventListener("click", function(){
    bus.style.borderRadius = "10px";
});

bus.addEventListener("dblclick", function(){
    bus.style.borderRadius = "0px";
});

