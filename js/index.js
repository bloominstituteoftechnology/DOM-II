// Your code goes here
//ideas:
//  mirror photo while mousedown
//  links change color and become bold while onmouseover then onmouseout
//  window.alert, or window.prompt this pops up a window with an alert, that way you don't need to ajust html

const images = document.querySelectorAll('img')

images.forEach(function(img) {
    img.addEventListener('mouseenter', e => e.target.style.transform = 'scaleX(-1)')
})
images.forEach(function(img) {
    img.addEventListener('mouseleave', e => e.target.style.transform = 'scaleX(1)')
})

const title = document.querySelector('.logo-heading')
const navBar = document.querySelector('.main-navigation')

title.addEventListener('mousedown', e => e.stopPropagation())
title.addEventListener('mousedown', e => e.target.style.backgroundColor = 'gold')
title.addEventListener('mouseup', e => e.target.style.backgroundColor = 'transparent')
navBar.addEventListener('mousedown', () => navBar.style.backgroundColor = 'gold')
navBar.addEventListener('mouseup', () => navBar.style.backgroundColor = 'transparent')


//nav color changes when hovering
const home = document.querySelector('.nav a:nth-of-type(1)')
const about = document.querySelector('.nav a:nth-of-type(2)')
const blog = document.querySelector('.nav a:nth-of-type(3)')
const contact = document.querySelector('.nav a:nth-of-type(4)')

home.addEventListener('mouseenter', () => home.style.color = 'purple')
home.addEventListener('mouseenter', () => about.style.color = 'purple')
home.addEventListener('mouseenter', () => blog.style.color = 'purple')
home.addEventListener('mouseenter', () => contact.style.color = 'purple')

about.addEventListener('mouseenter', () => home.style.color = 'purple')
about.addEventListener('mouseenter', () => about.style.color = 'purple')
about.addEventListener('mouseenter', () => blog.style.color = 'purple')
about.addEventListener('mouseenter', () => contact.style.color = 'purple')

blog.addEventListener('mouseenter', () => home.style.color = 'purple')
blog.addEventListener('mouseenter', () => about.style.color = 'purple')
blog.addEventListener('mouseenter', () => blog.style.color = 'purple')
blog.addEventListener('mouseenter', () => contact.style.color = 'purple')

contact.addEventListener('mouseenter', () => home.style.color = 'purple')
contact.addEventListener('mouseenter', () => about.style.color = 'purple')
contact.addEventListener('mouseenter', () => blog.style.color = 'purple')
contact.addEventListener('mouseenter', () => contact.style.color = 'purple')

home.addEventListener('mouseleave', () => home.style.color = '#212529')
home.addEventListener('mouseleave', () => about.style.color = '#212529')
home.addEventListener('mouseleave', () => blog.style.color = '#212529')
home.addEventListener('mouseleave', () => contact.style.color = '#212529')

about.addEventListener('mouseleave', () => home.style.color = '#212529')
about.addEventListener('mouseleave', () => about.style.color = '#212529')
about.addEventListener('mouseleave', () => blog.style.color = '#212529')
about.addEventListener('mouseleave', () => contact.style.color = '#212529')

blog.addEventListener('mouseleave', () => home.style.color = '#212529')
blog.addEventListener('mouseleave', () => about.style.color = '#212529')
blog.addEventListener('mouseleave', () => blog.style.color = '#212529')
blog.addEventListener('mouseleave', () => contact.style.color = '#212529')

contact.addEventListener('mouseleave', () => home.style.color = '#212529')
contact.addEventListener('mouseleave', () => about.style.color = '#212529')
contact.addEventListener('mouseleave', () => blog.style.color = '#212529')
contact.addEventListener('mouseleave', () => contact.style.color = '#212529')


//sign up buttons prompt window
const funButton = document.querySelector('.content-pick .destination:nth-of-type(1) .btn')
const mountainButton = document.querySelector('.content-pick .destination:nth-of-type(2) .btn')
const islandButton = document.querySelector('.content-pick .destination:nth-of-type(3) .btn')

funButton.addEventListener('click', event => prompt('Enter Social Security Number'))
mountainButton.addEventListener('click', event => prompt('Enter Social Security Number'))
islandButton.addEventListener('click', event => prompt('Enter Social Security Number'))


