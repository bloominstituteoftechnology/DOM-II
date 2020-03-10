// LECTURE NOTES
let homeLink = document.getElementById('home-link')
// Your code goes here
console.log('something else still');
homeLink.addEventListener(
  'click', // string with the name of the event
  () => {
    // things we want happening when this
    // link gets clicked
    console.log('the link got clicked');
  }
)
document.querySelector('nav').addEventListener('click', () => {
  console.log('the nav got clicked');
})


// attach a 'click' event listener to the header element
// and console.log('')
document.querySelector('header').addEventListener('click', () => {
  console.log('the header got clicked');
});

document.body.addEventListener('click', (stuff) => {
  console.log(stuff);
  console.log('the body of the page got clicked');
});
