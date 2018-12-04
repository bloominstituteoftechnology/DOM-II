// Your code goes here
const aTag =
document.querySelectorAll('a');

const heading = 
document.querySelector('.logo-heading');

aTag[0].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'red';
    console.log('Oh, hey, you clicked me!')
});

aTag[1].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'orange';
    console.log('Oh, yeah.')
});

aTag[2].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'yellow';
    console.log('I don\'t actually know how to put these together, that\'s why it looks like this.')
});

aTag[3].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'green';
    console.log('Lol colors.')
});

// heading[0].addEventListener('click', function(e) {
//     e.preventDefault();
//     e.target.style.color = 'red';
// });