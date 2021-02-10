
/* [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
  * `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`p
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`
  */
 // Your code goes here

//https://picsum.photos/1000/300


 var header_img = document.querySelector(".intro img");

header_img.addEventListener('mouseover', function (event)  {
    event.target.style.border = "2px solid #000";
    event.target.style.boxShadow = "10px 10px 5px #ccc";
});
header_img.addEventListener('mouseleave', function (event)  {
    event.target.style.border = "none";
    event.target.style.boxShadow = "none";
});
header_img.addEventListener('mousedown', function (event)  {
    event.target.setAttribute('src', "https://picsum.photos/1000/300");
});
 
header_img.addEventListener('mouseup', function (event)  {
    event.target.setAttribute('src', "/fun-bus.927a34f2.jpg");
});
var button1 = document.querySelectorAll(".btn")[0];
var button2 = document.querySelectorAll(".btn")[1];
var button3 = document.querySelectorAll(".btn")[2];

var content = document.querySelector("section.content-destination");

function randomColor() {
    var r = Math.floor(Math.random() * (256) + 0);
    var g = Math.floor(Math.random() * (256) + 0);
    var b = Math.floor(Math.random() * (256) + 0);
    console.log(`${r},${g},${b}`);
    return `${r},${g},${b}`;
}

function listener(event){
    event.target.style.backgroundColor = "rgb(" + randomColor() + ")";
    setTimeout(function() {
        event.target.style.background = ""
    },500)
    };
    

content.addEventListener("click", listener);
button1.addEventListener("click", (event) =>{
    event.preventDefault();
    listener(event);
    console.log(`button 1 was clicked`);   
});

button2.addEventListener("click", (event) =>{
    event.preventDefault();
    listener(event);
    console.log(`button 2 was clicked`);
});
button3.addEventListener("mousedown", (event) =>{
    event.preventDefault();
    // event.stopPropagation();
    listener(event);
    console.log(`button 3 was clicked`);
    
});

