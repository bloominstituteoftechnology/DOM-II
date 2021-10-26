// Your code goes here
const imgChange = document.querySelector('.intro img');
imgChange.addEventListener('mouseover', function(evt) {
    evt.target.style.boxShadow = "10px 15px 2px #DEB887";
});
console.log(imgChange)