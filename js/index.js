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

const imgMouseOver = document.querySelector('.main-navigation  nav-container .logo-heading');
//removed .container from in front of nav-container

document.addEventListener("mouseover", function( event ) {
    // console.log(event);
    // TweenMax.to(".logo-heading", 5, {rotation:360, scale:0.5, x:50, ease:Power4.easeOut});

});

//keydown

document.addEventListener('keydown', (event) => {
    console.log(event);
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    alert('Hello There');
  });

//wheel


//drag-drop


//load


//focus


//resize


//scroll


//select


//dblclick
