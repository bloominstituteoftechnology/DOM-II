// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
//  * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop` 

// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`



//  * `mouseover` DONE
const navAOne = document.querySelector('nav a');
navAOne.addEventListener('mouseover', function(){
    navAOne.style.fontSize = '64rem';
})

//   * `keydown`  NEEDS WORK
const keyDownImg = document.querySelector('h2');
keyDownImg.addEventListener('mousemove', function(evt){
    keyDownImg.style.display =  'none';
});



//   * `wheel` DONE
const bodyWheel = document.querySelector('body');
bodyWheel.addEventListener('wheel', function(){
bodyWheel.style.color = 'blue'
});


//load need work
const letsGo = document.querySelector('h1');
letsGo.addEventListener('load', function(){
    letsGo.style.color = 'blue';
})


//copy DONE
const btnFocus = document.querySelector('.btn');
btnFocus.addEventListener('copy', function(){
    btnFocus.style.fontSize= '0.25px'
})

// dblclick DONE
const btndblClick = document.querySelector('.btn');
btndblClick.addEventListener('dblclick', function(){
    btndblClick.style.display = 'none';
});

//mouseleave done
const btnMouseLeave = document.querySelector('body');
btnMouseLeave.addEventListener('mouseleave', function(){
    btnMouseLeave.style.color = 'blue';
});

//mouseenter done
const buttonMouseEnter = document.querySelector('.btn');
buttonMouseEnter.addEventListener('mouseenter', function(){
 buttonMouseEnter.style.color = 'pink'
});

//cut done
const buttonCut = document.querySelector('.btn');
buttonCut.addEventListener('cut', function(){
    buttonCut.style.fontSize = '64rem'
})

const divClick = document.querySelector('h1');
divClick.addEventListener('click', function(){
    divClick.style.display = 'none'
});



//   * `resize`
//   * `scroll`
//   * `select`
//   * `drag / drop` 
