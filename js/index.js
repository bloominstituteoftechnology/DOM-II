// Your code goes here

const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener('keydown', e => {
  console.log(`this is the blank key: ${e.code}`)
})

const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", e => {   
    // highlight the mouseover target
    e.target.style.color = "orange";
})

const textContent = document.querySelector('.text-content');
// dblclick to make underlined
textContent.addEventListener('dblclick', e => {
  e.target.style.textDecoration = "underline";
});
//-----------------------------------------

    // const destination = document.querySelectorAll('.destination');
    // destination.addEventListener('click' ,() => {
    // // const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    // // e.target.style.fontSize = '30px';
    // console.log(`Hello`)
    // })

const div = document.querySelector('.btn');

div.addEventListener('click', (e) => {
div.innerHTML = `click count: ${e.detail}`;
});

const destination = document.querySelectorAll(`.destination`);

destination[0].addEventListener('click', function(e) {
 console.log('Hello');
});


//----------------------------------------

const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.addEventListener('click', e => {

//  target you are clicking on
console.log(`this is my target: ${e.target}`) 
  
// target that you added the event listener to.
console.log(`this is my current target: ${e.currentTarget}`)

    e.stopPropagation();
})
