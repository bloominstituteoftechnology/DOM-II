// Your code goes here
let changeColor = (event) => {
    event.target.style.color = "red";
}

let changeSize = (event) => {
    event.target.style.fontSize = "4rem";
}
let logoTxt = document.getElementsByClassName("logo-heading");
logoTxt[0].addEventListener("mouseenter", changeColor );


let links = document.getElementsByClassName("nav-link");
for(i=0; i<links.length; i++){
    links[i].addEventListener("mousemove", changeSize);
}
