/*Objectives:
- Explain what events are in the browser window, and how event listeners can listen for those events.
- add event listeners and event handlers to elements.
- recognize event propagation and the method used to prevent it.
*/



// Step 1: Adding Events to Elements

// access the Element you wish to listen for events
const catImage = document.querySelector('.card-img-top')
console.log('cat image', catImage)


// 1a. Add mouseenter event 
// addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

// use addEventListener to listen for when the event type, denoted in the first param, is fired
// when event is fired, it will call the function in the callback
catImage.addEventListener('mouseenter', () => {
  
  catImage.style.transform = "scale(1.2)";
  catImage.style.transition = "all 0.3s";// smoth transition effect 
})

// this callback function can also be written with the event parameter
// the event object param is ALWAYS available, but should only be explicitly
// in the () if going to be used.
/*
catImage.addEventListener('mouseenter', (event) => {
  event.target.style.transform = "scale(1.2)";
  event.target.style.transition = "all 0.3s";
})
*/

// 1b. Add mouseleave event 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
catImage.addEventListener('mouseleave', () => {
  catImage.style.transform = "scale(1)" //  returns image back to original shape
})

// 1c. Add dblclick event
// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
const changeImage = document.querySelector('.logo-container img');
console.log(changeImage)
changeImage.addEventListener('dblclick', () => {
  // changes the src of the <img> tag to a new cat-like logo
  changeImage.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png";
})

// 1d. Add resize event
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event

// NOTE: This is on the window since the event happens to the window, not the DOM
window.addEventListener('resize', () => {
  // find element on the dom, and update image to be something new! 
  const dogsRule = document.querySelector('.card-img-top')
  dogsRule.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
})


// MAP VS. FOREACH REVIEW: 
// We need either if we are iterating over each element in array ===> we need a forEach or map 

// WHEN TO USE A MAP
// Transforming our Array from array of one type to an array of a different type
// EXAMPLE: Array of objects ===> Array of strings
// const fakeData = [{name: "emily", last: "foo"}, {name: "jeannine", last: "bar"}] // ARRAY OF OBJECTS
// const transformedArray = fakeData.map(obj => {
//   return obj.name
// })

// console.log(transformedArray) // ARRAY OF STRINGS


// WHEN TO USE A FOREACH
// Need to access each element to call a function or to read the data
// DOES NOT change the shape of the data. 
// Example: iterate over all cardTitles (below) and add event fn for each title
// forEach is available on NodeList collections 
// if unsure, you can always check like: console.log('has forEach?', cardTitles.forEach)


// 1e: Event object
const cardTitles = document.querySelectorAll('.card-title')
// Note we're using querySelectorAll  which returns all elements with that css. querySelector returns the 
// first element with that css
// cardTitles[0] === document.querySelector('card-title') 


// This is our function that will fire every time our addEventListener below is triggered
// we can pass it for each element in cardTitles because we use event.target
// to say which element should update on click
// event.target === is the element that fired the event
const titleEventHandler = (event) => {
  console.log('element', event.target)
  event.target.style.color = 'green'
}

cardTitles.forEach(title => {
  // for each title, add listener that will fire above event.
  title.addEventListener('click', titleEventHandler)
})

// This is refactored to L101-104 above. They are equivalent, but since we are
// applying the same function to every element in the collection, we should use
// forEach for cleaner code.
//
// cardTitles[0].addEventListener('click', titleEventHandler)
// cardTitles[1].addEventListener('click', titleEventHandler)
// cardTitles[2].addEventListener('click', titleEventHandler)
// cardTitles[3].addEventListener('click', titleEventHandler)








// Step 2: Event Propagation

// 2a. Example of event propagation
// set up 
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
  event.target.style.backgroundColor="papayawhip";
  console.log("end")
})

const cardGroup = document.querySelector(".card-group");
cardGroup.addEventListener('click', (event) => {
  event.target.style.backgroundColor="rebeccapurple";
  event.stopPropagation();
  console.log("middle")
});

const card = document.querySelector(".card");
card.addEventListener('click', (event) => {
  // card === event.target
  
  // 2b. stopPropagation 
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
  // we use stopPropagation so that ONLY this card will update. Only this card
  // will update because it is the lowest most child and it has a stopPropagation.
  event.stopPropagation()
  card.style.backgroundColor="hotpink";
  console.log("start")
});






// Step 3: Default behaviors of elements and how to stop them

// 3a. Show link default behavior with Home (no code - show as is)
// 3b. use preventDefault to stop default behavior
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

// default for Home <a> is to go to lambaschool. This is because href is defined in <a> 
// to prevent this navigation, use event.preventDefault()
const stopLinks = document.querySelectorAll('.menu-item')
stopLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()
    event.target.style.color = 'blue'
  })
})


// just applies stopPropagation on ONLY the Home link
// const homeLink = document.querySelector('.menu-item')
// homeLink.addEventListener('click', (event) => {
//   event.target.style.color = 'blue'
//   console.log(event.target.textContent)
//   event.preventDefault()
// })

