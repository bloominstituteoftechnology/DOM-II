let nav = document.querySelector('nav')
console.log(nav)

// 1 
document.querySelectorAll('nav')
nav.addEventListener('mouseover', e => {
    nav.style.border = '2px solid darkslategray'
})
// 2
nav.addEventListener('mouseout', e => {
    nav.style.border = 'none'
    
})





let h1 = document.querySelector('h1')

// 3
h1.addEventListener('mousedown', e => {
    h1.textContent = 'Bus So Fun lol'
})
h1.addEventListener('dblclick', e => {
    h1.style.border = '2px solid darkslategray'
})
// 4
h1.addEventListener('mouseup', e => {
    h1.textContent = 'Fun Bus'
})
//5
let img = document.querySelector('img')
img.addEventListener('mouseenter', e => {
    img.src = "https://media0.giphy.com/media/3BMsdRXVELShWzUcXj/giphy.gif"
})

img.addEventListener('drag', e => {
    img.src = "https://frogblogmanchester.files.wordpress.com/2014/04/agalychnis-annae.jpg"
})

//6
img.addEventListener('mouseleave', e => {
    img.src = "https://github.com/Zezima-sudo/DOM-II/blob/main/img/fun-bus.jpg?raw=true"
})
//7

let img2 = document.querySelector('.img-content')
img2.addEventListener('mouseenter', e => {
    img2.style.transform = "scale(1.2)"
    img2.style.transition = "all 0.3s"
  })

  //8 
  img2.addEventListener('mouseleave', e => {
    img2.style.transform = "scale(1.0)"
  })

  //9
  window.addEventListener('scroll', (event) => {
    if (window.scrollY >= 950) {
      alert("Don't forget to sign up to our mailing list!")
      
    }
  })
  //10
  let h2 = document.querySelector('h2')

  h2.addEventListener('mousemove', e => {
    h2.style.textShadow = '2px 2px 8px #000000'
    
})

//Using a node list as an array after making var querySelectorAll

let h2Array = document.querySelectorAll('section')

h2Array[0].addEventListener('mousedown', e => {
    h2Array[1].style.backgroundColor = 'darkslategrey'
    
    h2Array[2].style.backgroundColor = 'ghostwhite'
   
})



let propogation = document.querySelectorAll('p')
propogation[0].addEventListener('mousedown', e => {
    
    propogation[0].style.border = '2 px solid darkslategrey'
    e.stopPropagation();
})




//prevent default

$('nav').click(function (event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100},2000);
  });




