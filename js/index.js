const link = document.querySelectorAll('.nav-link')
const navigation = document.querySelector('.main-navigation')
const para = document.querySelectorAll('p')
const images = document.querySelectorAll('img')
const titles = document.querySelectorAll('h2')
const buttons = document.querySelectorAll('.btn')
 
link.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'blue'
  })
  link.addEventListener('mouseout', () => {
    link.style.color = 'red'
  })
})

images.forEach(image => {
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 65)
      image.style.display = 'none'
  })
})

buttons.forEach(button => {
  window.addEventListener('wheel', () => {
    button.style.color = 'blue'
  })
})

window.addEventListener('load', () => {
  alert("ITSA ME")
})

titles.forEach(title => {
  window.addEventListener('focus', () => {
    title.style.transform = 'translateX(20%)'
  })
})

window.addEventListener('resize', () => {
  document.body.style.backgroundColor = 'maroon'
})

para.forEach(par => {
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      par.style.fontFamily = "Indie Flower"
    } else {
      par.style.fontFamily = "roboto"
    }
  })
})

para.forEach(par => {
  window.addEventListener('click', () => {
    let style = window.getComputedStyle(par, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    par.style.fontSize = (currentSize + 50) + 'px';
  })
})
 
navigation.addEventListener('dblclick', () => {
  navigation.style.backgroundColor = "red"
})

link.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation()
  })
}); 