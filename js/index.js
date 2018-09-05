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

let fontSlant = (event) => {
    event.target.style.fontStyle = "italic";
}

let disapear = (event) => {
    event.target.style.display = "none";
}

let bodyBackground = (event) => {
    event.target.style.backgroundColor = "red";
}

let makeSpace  = (event) => {
    event.target.style.margin = "100px";
}
let shrink = (event) =>{
    event.target.style.fontSize = "2px";
}
let solid = (event) =>{
    event.target.style.borderStyle = "solid"
}

let no  = (event) =>{
    event.preventDefault();
}

let logoTxt = document.getElementsByClassName("logo-heading");
logoTxt[0].addEventListener("mouseenter", changeColor );


let links = document.getElementsByClassName("nav-link");
for(i=0; i<links.length; i++){
    links[i].addEventListener("mousemove", bottomBorder);
    links[i].addEventListener("click", no);
}

let allH2 = document.getElementsByTagName("h2");
for(i=0; i<links.length; i++){
    allH2[i].addEventListener("copy", makeBold);
}

let textContent = document.getElementsByClassName("text-content");
    textContent[0].addEventListener("click", fontSlant);
    textContent[1].addEventListener("cut", bodyBackground);

let divs = document.getElementsByTagName("div");
    divs[6].addEventListener("click", bodyBackground);
    divs[7].addEventListener("click", bodyBackground);

let img = document.getElementsByTagName("img");
    img[0].addEventListener("dblclick", disapear);
    img[3].addEventListener("dragstart", makeSpace);

let button = document.getElementsByClassName("btn");
   button[0].addEventListener("wheel", shrink);
   button[2].addEventListener("mouseout", bodyBackground);

let foot = document.getElementsByClassName("footer");
    foot.addEventListener("keydown", solid);
