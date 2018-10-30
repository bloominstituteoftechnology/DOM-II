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

// document.addEventListener("mouseover", function( event ) {
//     console.log(event);
//     TweenMax.to(".logo-heading", 5, {rotation:360, scale:0.5, x:50, ease:Power4.easeOut});

// });

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
    event.target.style.
});

// home.addEventListener('click', function(event) {
//   // whatever you are targeting with your mouse
//   console.log(event.target);
//   //event.currentTarget.style.color = "green";
//   // whatever you added the event listener to
//   console.log(event.currentTarget);
//   //event.target.style.color = "green";
// });


//drag-drop


//load


//focus


//resize


//scroll


//select


//dblclick
