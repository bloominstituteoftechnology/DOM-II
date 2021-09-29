// Your code goes here
// [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`
console.log('project is up')

const logoHeading = document.querySelector('h1')

//mouseover

logoHeading.addEventListener('mouseover', function(event){
    event.target.style.color = "red"
setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, 
false);

// CLick 
// const navLinksTop = document.querySelectorAll('a')

// navLinksTop.onclick( function(event) {
//     console.log("click")
//     navLinks.target.style.backgroundColor = "black";
    
// })
// navLinks.addEventListener('click', (event) => {
//     navLinks.textContent = `click count: ${event.detail}`;
// })

//Keydown

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(`The key: ${keyName}`);
  }); 

// wheel 

const wheel = document.querySelector('p');
 wheel.addEventListener('wheel', function() {
    wheel.style.color='green'
});

//click listens how many times the image was pressed

const busImage = document.querySelector('header img')
busImage.addEventListener('click', (event) =>{
    console.log('click the image')
    busImage.textContent = `click count: ${event.detail}`
})

//load

window.addEventListener("load", event => {
    console.log("All resources finished loading!");
});



//resize
window.addEventListener("resize", function() {
    document.querySelector("body").style.backgroundColor = 'pink'
})