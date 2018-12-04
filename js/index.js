// Your code goes here
const pageHeader = document.querySelector('.main-navigation');
pageHeader.addEventListener('mouseenter', function(e) {
    pageHeader.style.backgroundColor = '#17A2B8';
})
pageHeader.addEventListener('mouseleave', function(e){
    e.stopPropagation();
    pageHeader.style.backgroundColor = 'none';
})