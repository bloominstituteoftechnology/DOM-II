// nav h1 changes to a one of a rotating array of colors each time you hover
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

let h1Color = 0

const navH1 = document.querySelector('.nav-container h1')

navH1.addEventListener('mouseenter', () => {
  navH1.style.color = colors[h1Color]
})

navH1.addEventListener('mouseleave', () => {
  navH1.style.color = 'black'
  h1Color = h1Color === colors.length - 1 ? 0 : h1Color + 1
})


