// Your code goes here
// Global selectors
const link = document.querySelectorAll('.nav-link')
const navigation = document.querySelector('.main-navigation')
const para = document.querySelectorAll('p')
const images = document.querySelectorAll('img')
const titles = document.querySelectorAll('h2')
const buttons = document.querySelectorAll('.btn')

// Event listeners
// `mouseover` 
link.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'darkgrey'
  })
  link.addEventListener('mouseout', () => {
    link.style.color = 'black'
  })
})

// `keydown` 
images.forEach(image => {
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 65)
      image.style.display = 'none'
  })
})

//  `wheel` 
buttons.forEach(button => {
  window.addEventListener('wheel', () => {
    button.style.color = 'red'
  })
})

//  `load` 
window.addEventListener('load', () => {
  alert("This is literally the most redundant alert of all time. Thank you for letting me waste your time. Please come to my next Ted Talk next Tuesday. Oh, btw, the page is loaded. Hit ok to see the actual content.")
})

//  `focus` 
titles.forEach(title => {
  window.addEventListener('focus', () => {
    title.style.transform = 'translateX(20%)'
  })
})

//  `resize` 
window.addEventListener('resize', () => {
  document.body.style.backgroundColor = 'maroon'
})

//  `scroll` 
para.forEach(par => {
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      par.style.fontFamily = "Indie Flower"
    } else {
      par.style.fontFamily = "roboto"
    }
  })
})

//  `click` 
para.forEach(par => {
  window.addEventListener('click', () => {
    let style = window.getComputedStyle(par, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    par.style.fontSize = (currentSize + 50) + 'px';
  })
})


//  `dblclick` 
navigation.addEventListener('dblclick', () => {
  navigation.style.backgroundColor = "cyan"
})

link.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation()
  })
});