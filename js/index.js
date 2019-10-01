// Your code goes here
let body = document.querySelector("body");
let header = document.querySelector("header");
let images = document.querySelectorAll("img");
let paras = document.querySelectorAll('p');
console.log(images);
images[0].addEventListener("click", ()=>{ header.style.background = "white"; });

let red = 100;
let green = 100;
let blue = 100;
let adding = true;

let color = `rgb(${red}, ${green}, ${blue})`;
header.addEventListener("click", ()=>{
    red = 100; blue = 100; green = 100; color = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = color; console.log('triggered'); console.log(header);});

window.addEventListener("scroll", () => {
    if (adding === true){
        if (red < 256)
        {red++; }
        else {adding = false;}
    }
    else {
        if (red > 0)
        {red--;}
        else {adding = true;}
    }
    color = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = color;
    console.log(red);
    console.log(color);
});
window.addEventListener("dblclick", () => {
    red = 256; blue = 256; green = 256;
    color = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = color;
    console.log(red);
    console.log(color);
});

paras[0].addEventListener("copy", () => {
    const selection = document.getSelection();
    alert(`${selection}\nwas copied!`); });
    paras[0].addEventListener("cut", () => {
        const selection = document.getSelection();
        alert(`${selection}\nwas cut!\ncut you so bad`); });
    paras[1].addEventListener("mouseenter", () => {
        red = 0; green = 0; blue = 0; color = `rgb(${red}, ${green}, ${blue})`;
        paras[1].style.background = color;
    });
    paras[1].addEventListener("mouseleave", () => {
        red = 256; green = 256; blue = 256; color = `rgb(${red}, ${green}, ${blue})`;
        paras[1].style.background = color;
    });
    paras[1].addEventListener("mousemove", () => {
        if (adding === true){
            if (red < 256)
            {red++; blue++; green++; }
            else {adding = false;}
        }
        else {
            if (red > 0)
            {red--; blue--; green--;}
            else {adding = true;}
        }
        color = `rgb(${red}, ${green}, ${blue})`;
        paras[1].style.background = color;
    });
console.log(paras);

document.addEventListener('keydown', logKeyDown);
document.addEventListener('keyup', logKeyUp);

function logKeyDown(e) {
  console.log(`${e.code} is pressed`);
}
function logKeyUp(e) {
  console.log(`${e.code} is released`);
}


//events used: 
//1 click
//2 scroll
//3 keydown
//4 keyup
//5 copy
//6 cut
//7 mouseenter
//8 mouseleave
//9 mousemove
//10 dblclick