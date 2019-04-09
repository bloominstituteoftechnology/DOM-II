// Your code goes here
// Dan's EX:
// const buttonBar = document.querySelector('.button-bar')

// buttonBar.addEventListener('click', function(event) {
//   if (event.target.tagName === 'BUTTON') {
//     console.log('clientX:', event.clientX)
//     console.log('clientY:', event.clientX)
//     console.log('target:', event.target)
//     if (event.target.id === 'custom-btn3') {
//       alert('3rd button!')
//     }
//   }
//   // console.log('currentTarget:', event.currentTarget.innerHTML)
// });

// Create 10 unique event listeners
//  * [ ] `mouseover`
// MDN EX: var test = document.getElementById("test");
// test.addEventListener("mouseenter", function( event ) {   
//     // highlight the mouseenter target
//     event.target.style.color = "purple";
//   });

let headOne = document.getElementsByClassName("logo-heading");
headOne.addEventListener("mouseover",function(event){
    event.target.textContent = "FUN BUS!";

});

// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`