// Your code goes here
/*    
	* [x] `keydown` - background of page changes
	* [x] `mousemove` - when mouse on text, turns it a diff color.
	* [x] `dragstart` - alert 'This is not allowed' 
    * [x] `click` - logo size changes 
    * [x] `dblclick` - logo rotates 360;
	* [x] `contextmenu` - right click changes text;
	* [x] `copy` - text turns bold. 
	* [x] `dragend` - backgroundcolor changes .
    * [x] `cut` - when selection is cut, display none. 
    * [ ] `mouseover` - when mouse is over 1st picture it slides back and forth
*/



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    event.target.style.backgroundColor = "black";
  });
    

const home = document.querySelector('.home');

home.addEventListener('mousemove', (event) => {
    console.log(event.target);
   event.target.style.color = "blue";
});

document.addEventListener('dragstart',(event) =>{
    console.log(event.target);
    alert('This is not allowed.');
});

document.addEventListener('dragend',(event) => {
    event.target.style.backgroundColor = "pink";
})

const logoH = document.querySelector('.logo-heading')

logoH.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.fontSize = "1000%";
    console.log ('Logo was clicked');
});

logoH.addEventListener('dblclick',(event) =>{
  TweenMax.to(".logo-heading",2, {rotation:360})
});

const navctner = document.querySelector('.nav-container')

navctner.addEventListener('click',(event) =>{
    console.log('Header was clicked');
    // event.target.style.backgroundColor = "lightgray";
})

const mainhead = document.querySelector('.nav')
console.log(mainhead)

mainhead.addEventListener('contextmenu',(event) => {
    console.log(event.target);
    event.target.textContent = 'Action not supported';
});

mainhead.addEventListener('click',(event) =>{
    event.preventDefault();
    console.log("Link prevented");
})

document.addEventListener('copy', (event)=> {
    event.target.style.fontWeight = 'bold';
});

document.addEventListener('cut', (event) => {
    event.target.style.display = 'none';
    alert('You cut the page!');
});

const pic = document.querySelector('img') 

pic.addEventListener('mouseover', (event) => {
    TweenMax.to("img",2, {rotation:360})
});


