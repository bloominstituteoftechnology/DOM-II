// Your code goes here
// Event 1
const imgChange = document.querySelector('.intro img');
imgChange.addEventListener('mouseover', function(evt) {
    evt.target.style.boxShadow = "10px 15px 2px #DEB887";
});

// Event 2
const navChange = document.querySelectorAll('.nav .nav-link');
 Array.from(navChange).forEach(change =>{
    change.addEventListener('click', function(evt) {
        evt.target.style.color = '#DEB887';
    });

    change.removeEventListener('click', function(evt) {
        evt.target.style.color = "black";
    })
 });
