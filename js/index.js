const first = document.getElementsByClassName('logo-heading')
console.log(first)
const second = document.getElementsByClassName('nav-link')
console.log(second)
const third = document.getElementsById('h2')
console.log(third)
const fourth = document.getElementsById('h4')
console.log(fourth)

h2.addEventListener('mouseover', function(){
      h2.style.font = bold
})
logo-heading.addEventListener('resize', function(){
    logo-heading.style.font = .5em
})
h4.addEventListener('click', function(){
    h4.style.font = bold
})
nav-link.addEventListener('dblclick', function(){
    nav-link.style.font = bold
})

