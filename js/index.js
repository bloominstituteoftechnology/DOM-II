// 1 load, alerts that the page has loaded
window.addEventListener('load', function(event){
  alert('The page is loaded!')
})

const navLinks = document.querySelectorAll('.nav-link')

for (let i = 0; i < navLinks.length; i++){
  // 2 mouseover (changes nav link text/background color)
  navLinks[i].addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = 'black'
      event.target.style.color = 'white'
  })
  // 3 mouseout (changes nav link text/background back to normal)
  navLinks[i].addEventListener('mouseout', function(event){
      event.target.style.backgroundColor = 'white'
      event.target.style.color = 'black'
  })
}

const container = document.querySelector('.container')

// 4 keydown background turns lightgray when B key is pressed
document.addEventListener('keydown', function(event){
  if(event.key === 'b'){
    event.target.style.backgroundColor = 'lightgray'
  }
})
// 5 keyup background color goes back to normal when B key is released
document.addEventListener('keyup', function(event){
  event.target.style.backgroundColor = 'white'
})


const introImage = document.querySelector('.intro img')

// 6 dblclick makes the contents disappear when doubleclicked on
introImage.addEventListener('dblclick', function(event) {
  event.target.style.display = 'none'
})

const button = document.querySelectorAll('.btn')

// 7 mousedown changes button text to say 'error' with red backgroud because the buttons do nothing
button.forEach(function(item){
  item.addEventListener('mousedown', event => {
    event.target.textContent = 'error'
    event.target.style.backgroundColor = 'red'
  });
});

// 8 mouseup changes buttons back to normal when mouse is released 
button.forEach(function(item){
  item.addEventListener('mouseup', function(event){
    event.target.textContent = 'Sign Me Up!'
    event.target.style.backgroundColor = '#17A2B8'
  });
});

const sectionText = document.querySelectorAll('section p')

// 9 mouseenter highlights paragraphs with pink background
sectionText.forEach(function(item){
  item.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'lightpink'
  })
})

//10 mouseleave un-highlights paragraphs
sectionText.forEach(function(item){
  item.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = ''
  })
})