// Your code goes here
// `mouseover`
// this will be used to change the color of text in the h2s if the mouse passes over the first h2 "Welcome To Fun Bus!".
const h2Mouse = document.querySelector('.intro h2');
const h2Target = document.querySelectorAll('h2');
h2Mouse.addEventListener('mouseover', event => {
  h2Target[0].style.color='red'
  h2Target[1].style.color='green'
  h2Target[2].style.color = 'blue'
  h2Target[3].style.color = 'orange'}
  );
//`keydown`
//When the space bar is pressed this will change the background of the body black please note text will not be visible unless user runs mouse icon ovr the first h2 and wheelscrolls over the first paragraph
const kdTarget = document.querySelector('body');
document.addEventListener('keydown', (event) => {
  if (event.keyCode == "32") {
    kdTarget.style.backgroundColor = "black";
};
});
// `wheel`
// when the first paragragh is wheeled over it changes the color of all text in the paragraphs
const pWheel = document.querySelector('.intro p');
const pTarget = document.querySelectorAll('p');
pWheel.addEventListener('wheel', event => {
  pTarget[0].style.color='green'
  pTarget[1].style.color='orange'
  pTarget[2].style.color = 'red'
  pTarget[3].style.color = 'blue'
  pTarget[4].style.color='green'
  pTarget[5].style.color='orange'
  pTarget[6].style.color = 'red'
  pTarget[7].style.color = 'blue'
  pTarget[8].style.color='green'
  pTarget[9].style.color='orange'
});
//`drag / drop`
const iDrag = document.querySelector('.intro img');
iDrag.setAttribute('draggable',true);

const fDock1 = document.createElement("div");
fDock1.innerText='Drag img here';
fDock1.style.border='1px dashed grey';
fDock1.classList.add("empty");
const fDock2 = document.createElement("div");
fDock2.innerText='Drag img here';
fDock2.style.border='1px dashed grey';
fDock2.classList.add("empty");
const fDock3 = document.createElement("div");
fDock3.innerText='Drag img here';
fDock3.style.border='1px dashed grey';
fDock3.classList.add("empty");
const fDock4 = document.createElement("div");
fDock4.innerText='Drag img here';
fDock4.style.border='1px dashed grey';
fDock4.classList.add("empty");
const fDock5 = document.createElement("div");
fDock5.innerText='Drag img here';
fDock5.style.border='1px dashed grey';
fDock5.classList.add("empty");
const fDock6 = document.createElement("div");
fDock6.innerText='Drag img here';
fDock6.style.border='1px dashed grey';
fDock6.classList.add("empty");
const fDock7 = document.createElement("div");
fDock7.innerText='Drag img here';
fDock7.style.border='1px dashed grey';
fDock7.classList.add("empty");
const fDock8 = document.createElement("div");
fDock8.innerText='Drag img here';
fDock8.style.border='1px dashed grey';
fDock8.classList.add("empty");
const fDock9 = document.createElement("div");
fDock9.innerText='Drag img here';
fDock9.style.border='1px dashed grey';
fDock9.classList.add("empty");
const fDock10 = document.createElement("div");
fDock10.innerText='Drag img here';
fDock10.style.border='1px dashed grey';
fDock10.classList.add("empty");
pTarget[0].appendChild(fDock1);
pTarget[1].appendChild(fDock2);
pTarget[2].appendChild(fDock3);
pTarget[3].appendChild(fDock4);
pTarget[4].appendChild(fDock5);
pTarget[5].appendChild(fDock6);
pTarget[6].appendChild(fDock7);
pTarget[7].appendChild(fDock8);
pTarget[8].appendChild(fDock9);
pTarget[9].appendChild(fDock10);
const empties = document.querySelectorAll('.empty');
// listener starts here
iDrag.addEventListener('dragstart', dragStart);
iDrag.addEventListener('dragend', dragEnd);
for (const empt of empties){
  empt.addEventListener('dragover',dragOver);
  empt.addEventListener('dragenter',dragEnter);
  empt.addEventListener('dragleave',dragLeave);
  empt.addEventListener('drop',dragDrop);
}
function dragStart(){
console.log('start');
setTimeout(()=>(iDrag.style.display = 'none',0))
}
function dragEnd(){
  iDrag.style.display = 'inline';
console.log('end');
}
function dragOver(e){
  e.preventDefault();
console.log ('over')
}
function dragEnter(e){
  e.preventDefault();
console.log('enter')
}
function dragLeave(){
}
function dragDrop(){
  this.append(iDrag);
}
//`load`
let contain = document.querySelector('.home');
contain.addEventListener('load',function () {
  setTimeout(() => {
    console.log("Loading now complete");
  // alert("The fun bus is now loading ")
  kdTarget.style.backgroundColor = "lightgrey";
},true);}, 500);
//`focus`
let form1 = fDock1.appendChild(document.createElement('form'));
form1.name = 'input';
form1.action = 'html_form_action.asp';
form1.method = 'get';
form1.appendChild(document.createTextNode('Take Notes: '));
let input1 = form1.appendChild(document.createElement('input'));
input1.type = 'text';
input1.name = 'tex';
input1.value = 'type here';
input1 = form1.appendChild(document.createElement('input'));
input1.type = 'submit';
input1.value = 'Submit';
let iteminput1 = document.querySelector('input[type="text"]');
iteminput1.addEventListener('focus',runEvent);
function runEvent(e){(input1.value = 'You are so focused')};
//`resize`
renav = document.querySelector('.nav-container');
window.addEventListener('resize', function(){
  renav.style.backgroundColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
});
// `scroll`
window.addEventListener('scroll', function() {
  renav.style.backgroundColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
});

// 'dblclick
let selp = document.querySelectorAll('.destination p')
let butTarget = document.querySelectorAll('.btn');
let h4Target = document.querySelectorAll('.destination h4');
butTarget[0].addEventListener('dblclick', function () {
selp[0].style.backgroundColor='lightblue';
h4Target[0].style.backgroundColor='lightgreen';
})

//'mouseup'

butTarget[1].addEventListener('mouseup',function (){
  h4Target[1].style.fontSize = "xx-large";
}) 