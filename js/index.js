// Your code goes here
//1)mouseenter
let textDecor = document.querySelectorAll("h2");
console.log(textDecor);
textDecor.forEach(title => {
    title.addEventListener("mouseenter",(event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.style.textDecoration = "underline";

    });
    
});
//2)mouseleave
textDecor.forEach(title => {
    title.addEventListener("mouseleave",(event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.style.textDecoration = "none";
    });
    
});
//3)mouseover
let imgSelector = document.querySelector("img");
imgSelector.addEventListener('mouseover',() => {
    imgSelector.style.transform = 'scale(1.2)';
});
//4)mouseout
imgSelector.addEventListener('mouseout',() => {
    imgSelector.style.transform = 'scale(1)';
});
//5)click
let textSelector = document.querySelector("p");
textSelector.addEventListener('click',() => {
    textSelector.style.transform = 'scaleY(-1) scaleX(-1)';
    textSelector.style.transition = "all 1s";
});
//6)doubleclick
textSelector.addEventListener('dblclick',() => {
    textSelector.style.transform = 'scaleY(1) scaleX(1)';
    textSelector.style.transition = "all 1s";
});
//7)contextmenu
let textSelector2 = document.querySelectorAll("p");
console.log(textSelector2);
//--------------------------------------------------------- forEach for a Nodelist does not work
// textSelector.forEach( p => {
//     p.addEventListener('contextmenu',(event) => {
//         event.target.style.display = 'none';
//     });
// });
//----------------------------------------------------- All p elements
textSelector2[0].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[1].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[2].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[3].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[4].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[5].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[6].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[7].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[8].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
textSelector2[9].addEventListener('contextmenu', () =>{
    event.target.style.display = 'none';
})
//----------------------------------------------------- All p elements end
//8)fullscreen
// imgSelector.addEventListener('webkitfullscreenchange',() => {
//     console.log('it worked')
// });
let button = document.querySelectorAll('.btn');
button[0].textContent = "Fullscreen!";
button[0].addEventListener('click',()=>{
    document.documentElement.requestFullscreen();
})
button[1].textContent = "Exit Fullscreen!";
button[1].addEventListener('click',()=>{
    document.exitFullscreen();
})

document.addEventListener('fullscreenchange',()=>{
    imgSelector.style.transform = "scaleX(-1)";
})

//9)load
let footer = document.querySelector('.footer');
window.addEventListener('load',() => {
    footer.style.fontStyle = 'italic';
});
//10)
window.addEventListener("scroll",()=>{
    textSelector.style.fontStyle = 'italic';
    console.log('it worked');
})