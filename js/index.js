// Your code goes here
//ideas:
//  mirror photo while mousedown
//  links change color and become bold while onmouseover then onmouseout
//  window.alert, or window.prompt this pops up a window with an alert, that way you don't need to ajust html

const images = document.querySelectorAll('img')

images.forEach(function(ele) {
    ele.addEventListener('mouseenter', e => e.target.style.transform = 'scaleX(-1)')
})
images.forEach(function(ele) {
    ele.addEventListener('mouseleave', e => e.target.style.transform = 'scaleX(1)')
})

const title = document.querySelector('.logo-heading')


title.addEventListener('click', e => e.target.style.backgroundColor = 'gold')

