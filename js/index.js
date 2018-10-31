// Your code goes here
/* * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
    * [ ] `dblclick` */
    
// mouseover
//look at the css below. It selects the logo heading (not the image)

const imgMouseOver = document.querySelector(".main-navigation .nav-container .logo-heading")
//removed .container from in front of nav-container

document.addEventListener("mouseover", function( event ) {
    console.log(event);
    // TweenMax.to(".logo-heading", 5, {rotation:360, scale:0.5, x:50, ease:Power4.easeOut});
	document.querySelector(".main-navigation .nav-container .logo-heading").style.height = "100px";
});

//keydown

document.addEventListener('keydown', (event) => {
    console.log(event);
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    alert('Hello There');
  });

//wheel

// const wheelScroll = document.querySelector("window");

// document.addEventListener('wheel', (event) => {
//     const scrollName = event.deltaY
//     console.log(event.target);
//     console.log(event.target);
//     alert(scrollName);
//     event.currentTarget.style.background = "green";
//   });

const wheelScroll = window.addEventListener('wheel',function (event) {
    document.querySelector(".main-navigation .nav-container .logo-heading").style.visibility = "hidden";
});

//drag-drop

const dragDrop = document.querySelector(".home .intro img")

document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
	// store a ref. on the dragged elem
	dragged = event.target;
	// make it half transparent
	event.target.style.opacity = 0;
}, false);

document.addEventListener("dragend", function( event ) {
	// reset the transparency
	event.target.style.opacity = "";
	alert('Put Me Back!')
}, false)


//focus

document.addEventListener("focus", function( event ) {
	document.querySelector(".home .intro .content-section").style.background = "yellow";
});


//scroll

window.addEventListener("scroll", function( event ) {
	var x = 0; {
	document.querySelectorAll(".home").innerHTML = x += 1;
	console.log(event);
	alert('Scroll On By!')
	}
});


//select

document.addEventListener("select", function( event ) {
	alert('Pick me!')	
},false);


//dblclick
const dblClick = document.querySelector('.main-navigation')

document.addEventListener("dblclick", function( event ) {
	//need a container to reference
	clicked = event.target;
	// make it transparent
	event.target.style.opacity = 0;	
	alert('Where did navigation go?')
});


//copy + stop propagation
const copyCat = document.querySelector('.home .intro')
document.addEventListener("copy", function( event ) {
	alert ('Stop that, copy cat!')
	event.stopPropagation()

//cut is nested
	document.addEventListener("cut", function( event ) {
		alert ('Murderer!')	
		document.querySelector('.home .intro').style.visibility = "hidden";
});

})

const navEl = document.getElementById('a')
document.addEventListener("click", function(event){
	alert('You are not going anywhere!')
	preventDefault()
});