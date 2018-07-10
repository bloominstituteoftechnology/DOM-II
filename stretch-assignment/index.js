const red2black = document.querySelector('.block--red')
console.log(red2black)
red2black.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'black'
  event.preventDefault();
})
