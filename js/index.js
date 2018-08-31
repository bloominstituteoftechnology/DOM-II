// Your code goes here
let changeColor = (event) => {
    event.target.style.color = "red";
}

let bottomBorder = (event) => {
    event.target.style.borderBottom = "1px solid black";
}

let makeBold = (event) => {
    event.target.style.fontWeight= "bold";
}

let logoTxt = document.getElementsByClassName("logo-heading");
logoTxt[0].addEventListener("mouseenter", changeColor );


let links = document.getElementsByClassName("nav-link");
for(i=0; i<links.length; i++){
    links[i].addEventListener("mousemove", bottomBorder);
}

let allH2 = document.getElementsByTagName("h2");
for(i=0; i<links.length; i++){
    allH2[i].addEventListener("copy", makeBold);
}