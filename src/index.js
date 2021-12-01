import './less/index.less'

// Your code goes here!
const colorChangeNav = document.querySelector('.main-navigation');
colorChangeNav.addEventListener('mouseover', function(){
    colorChangeNav.style.backgroundColor = 'light blue';
});
colorChangeNav.addEventListener('mouseout', function(){
    colorChangeNav.style.backgroundColor = 'pink';
});


