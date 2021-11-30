import './less/index.less'

// Your code goes here!
let nav = document.getElementsByClassName("nav-link");
nav.addEventListener("mouseover", evt => {
    document.getElementsByClassName("nav-link").style.fontSize = "x-large";
    document.write(header.fontcolor( "red" ));
});

let header = document.getElementsByClassName("intro");
header.addEventListener("click", evt => {
    document.write(header.fontcolor( "blue" ));
});

let mid = document.getElementsByClassName("content-section");
mid.addEventListener("dblclick", evt => {
    document.write(mid.fontcolor( "red" ));

let bottom = document.getElementsByClassName("content-section inverse-content");
bottom.addEventListener("scroll", evt => {
    document.write(bottom.fontcolor( "green" ));
});


let bttn = document.getElementsByClassName("btn");
bttn.addEventListener("click", evt => {
    bttn.style.fontSize = "x-large";
});

let titletxt = document.getElementsByTagName("title");
titletxt.addEventListener("mouseover", evt => {
    titletxt.style.fontSize = "x-large";
});

let roundimg = document.getElementsByClassName("img-fluid rounded");
roundimg.addEventListener("mouseover", evt => {
    if(roundimg && roundimg.style) {
        roundimg.style.height = '10vh';
        roundimg.style.width = '100px';
    }
});

let contentimg = document.getElementsByClassName("img-content");
contentimg.addEventListener("load", evt => {
    if(contentimg && contentimg.style) {
        contentimg.style.height = '15vh';
        contnentimg.style.width = '150px';
    }
});

let header = document.getElementsByClassName("intro");
header.addEventListener("click", evt => {
    header.style.fontSize = "x-large";
});

let foot = document.getElementsByClassName("footer");
foot.addEventListener("dblclick", evt => {
    foot.style.fontSize = "large";
});

document.querySelectorAll("nav-link").addEventListener("click", function(event) {
    event.preventDefault();
});