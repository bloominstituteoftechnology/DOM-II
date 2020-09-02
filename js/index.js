const navLinks = document.querySelectorAll('.nav-link')

for (let i = 0; i < navLinks.length; i++){
  // 1 mouseover (changes nav link text/background color)
  navLinks[i].addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = 'black'
      event.target.style.color = 'white'
  })
  // 2 mouseout (changes nav link text/background back to normal)
  navLinks[i].addEventListener('mouseout', function(event){
      event.target.style.backgroundColor = 'white'
      event.target.style.color = 'black'
  })
}

const container = document.querySelector('.container')

// 3 keydown background turns lightgray when B key is pressed
document.addEventListener('keydown', function(event){
  if(event.key === 'b'){
    event.target.style.backgroundColor = 'lightgray'
  }
})
// 4 keyup background color goes back to normal when B key is released
document.addEventListener('keyup', function(event){
  event.target.style.backgroundColor = 'white'
})

// 5 dblclick
const header = document.querySelector('intro')
const headerImg = header.getElementByTagName('img')

headerImg.addEventListener('dblclick', function (event) {
  event.target.style.display = 'none'
})
