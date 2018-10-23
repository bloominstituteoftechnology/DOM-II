// Your code goes here

// * [ ] `mouseover`------------------------------
// set anchor text color on mouseover
const anchors = Array.from(document.querySelectorAll('.nav a'));
anchors.forEach(e => e.addEventListener('mouseover',(event) => {
    event.currentTarget.style.color = '#17A2B8';
}));
// * [ ] `keydown`--------------------------------
// change body color on keypress
const body = document.querySelector('body');
document.addEventListener('keydown', (event) => {
    body.style.backgroundColor = '#FFEBCD';

});
// * [ ] `wheel`----------------------------------------
// increase header text on scroll over
const introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('wheel', (event)=> {
    event.preventDefault();
    event.currentTarget.style.fontSize = '10rem';
});
// * [ ] `drag / drop`----------------------------------
const introImg = document.querySelector('.intro img');
const goImg = document.querySelector('.img-content img');


introImg.addEventListener('drag',(event) => {
    event.currentTarget.style.width = '400px';
})
introImg.addEventListener('dragend',(event) => {
    event.currentTarget.style.width = '800px';
})
introHeader.addEventListener('dragover',(event) => {
    event.preventDefault();
});
introHeader.addEventListener('drop',(event) => {
    body.style.backgroundColor = 'purple';
});

// * [ ] `load`------------------------------------------
// on load of img, turn background red and make img small
goImg.addEventListener('load', (event) => {
    goImg.style.width = '20px';
    body.style.backgroundColor = 'red';
})
// * [ ] `focus`-----------------------------------------
// turn anchors white on focus
anchors.forEach(e => e.addEventListener('focus',(event) => {
    event.currentTarget.style.color = 'white';
}));
// * [ ] `resize`---------------------------------------
// turn body blue on resize
window.addEventListener('resize', i => {
    body.style.backgroundColor = 'blue';
})
// * [ ] `scroll`--------------------------------------
// turn body green on scroll
window.addEventListener('scroll', i => {
    body.style.backgroundColor = 'green';
})
// * [ ] `select`---------------------------------------
// turn textbox background black when text selected
const textArea = document.querySelector('textarea');
textArea.addEventListener('select', e => {
    e.currentTarget.style.backgroundColor = 'black';
})
// cut works here where select wont
const headText = document.querySelector('.intro p')
headText.addEventListener('cut', (event)=>{
    event.currentTarget.style.color = 'red';
    console.log('selected');
});
// * [ ] `dblclick`-----------------------------------
// change head welcome size on doubleclick
introHeader.addEventListener('dblclick',e=>{
    event.currentTarget.style.fontSize = '5rem';
})
//-----------------------------------------------------
// prevent nav items from loading on click.
anchors.forEach(e => e.addEventListener('click', (event) => {
    event.preventDefault();
}));

//nest 2------------------------------------------------
const textBox = document.querySelector('.text-content');
const innerP = document.querySelector('.text-content p');
textBox.addEventListener('click',e => {
    e.currentTarget.style.backgroundColor = 'pink';
})
innerP.addEventListener('click',e=>{
    e.stopPropagation();
    e.currentTarget.style.backgroundColor = 'orange';
})



//GSAP---------------------------------------------------
TweenMax.to('nav', 4, {marginRight:100,ease:Elastic.easeOut});
TweenMax.to(introImg, 3, { borderRadius:'50%', border:'3px solid black'});
TweenMax.from('body', 2, {opacity:0});