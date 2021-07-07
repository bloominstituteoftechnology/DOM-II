// Your code goes here

//mouseenter

let textDecoration = document.querySelectorAll("h2")
console.log(textDecoration);
textDecoration.forEach(title => {
    title.addEventListener("mouseenter", (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.target.style.textDecoration = "underline";
    });
});

//click

let textSelector = document.querySelector("p")
textSelector.addEventListener('click', () => {
    textSelector.style.transform = 'scaleY(-1) scaleX(-1)';
    textSelector.style.transition = "all 1s";
});

//doubleclick
textSelector = document.querySelector("p")
textSelector.addEventListener('dblclick', () => {
    textSelector.style.transform = 'scaleY(1) scaleX(1)';
    textSelector.style.transition = "all 1s";
});

//load

let footer = document.querySelector('.footer');
window.addEventListener('load', () =>{
    footer.style.fontStyle = 'italic';
});

//mouseover
const mynav = document.querySelectorAll('a')
mynav.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'red'
    })
})


//mouseout 
mynav.forEach(link => {
    link.addEventListener('mouseout' , () => {
        link.style.color = 'brown'
    })
})

//dbclick
const bttn = document.querySelectorAll('.btn')
bttn.forEach(element => {
    element.addEventListener('dblclick' , () => {
        element.style.color = 'pink'
    })
});

//wheel

const maintitles = document.querySelectorAll('h2')
maintitles.forEach(element => {
    element.addEventListener('wheel' , () => {
        element.style.fontStyle = 'inherit'
    })
});

//click 
const body = document.querySelector('body')
body.addEventListener('click' , (event) => {
    body.style.backgroundColor = 'lightSteelBlue'
})

//mouseleave

const header = document.querySelector('header')
header.addEventListener('mouseleave', function () {
    header.style.background = 'Bisque';
});

