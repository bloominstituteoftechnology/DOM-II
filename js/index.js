// Your code goes here



const navBar = document.querySelector('.main-navigation');
window.addEventListener('scroll', () => {
    navBar.style.background = '#C0C0C0';
    navBar.style.opacity = '0.8';
});
window.addEventListener('load', () => {
    this.alert("Great News ! You've been Matched with an Excellent Traveling Advisor , You'll be on your Way ! ")
})
document.querySelector('.container > .intro > img').addEventListener('mouseover', mouseoverEL);

document.querySelector('.container > .intro > img').addEventListener('mouseleave', mouseleaveEL); 

document.querySelector('.container > .intro > h2').addEventListener("dblclick", doubleClickEl);

document.querySelector('.container > .intro > h2').addEventListener('click', clickEL);

document.querySelector('.container > .content-destination > img').addEventListener("mouseover", mouseoverEL2);

document.querySelector('.container > .content-destination > img').addEventListener('mouseleave', mouseleaveEl2);


// pointerOut, PointerOver, 
// MouseDown - mouse button is clicked down , 
// MouseUp - when you realse the mouse clicker , 
// mouseEnter, mouseLeave

function mouseoverEL() {
    document.querySelector('.container > .intro > img').style.boxShadow = "2px 10px 8px grey";
    console.log('boxShawdow working');
}

function mouseoverEL2() {
    document.querySelector('.container > .content-destination > img' ).style.boxShadow = "2px 10px 8px grey";
    console.log('boxShawdow2 working');
}

function mouseleaveEL() {
    document.querySelector('.container > .intro > img').style.boxShadow = "none";
    console.log('boxShadow disappeared');
}

function mouseleaveEl2() {
    document.querySelector('.container > .content-destination > img').style.boxShadow = "none";
    console.log('boxShadow disappeared');
}

function doubleClickEl() {
    document.querySelector('.container > .intro > h2').style.fontStyle ='italic';
    console.log('italic working')
}

function doubleClickEl2() {
document.querySelector('.container > content-destination > h2').style.fontStyle = 'italic';
console.log('italic working')
}

function clickEL() {
    document.querySelector('.container > .intro > h2').style.fontStyle ='normal';
    console.warn("normal text")
}