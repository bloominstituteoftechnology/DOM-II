// Your code goes here
const allImg = document.querySelectorAll('img')

allImg.forEach(item => {
    item.addEventListener('mouseover', event => {
      event.target.style.border = "solid purple"
      setTimeout(function() {
        event.target.style.border = "";
      }, 1000);
    })

  })

  const NavLink = document.querySelector("nav");
 console.log(NavLink)
 NavLink.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "Red";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);


document.addEventListener('keydown', (e) => {
  if(e.keyCode === 27 || e.key === 'Backspace'){
      alert('The time is NOW.')
  }
}) 

const p = document.querySelectorAll('p')
window.addEventListener('load',() => {
    setTimeout(function(){
        p.forEach(instance => {
            instance.textContent = 'Its never too late!'
        })
        },5000)
})

window.addEventListener('resize', () => {
  document.querySelector('body').style.backgroundColor = 'green'
})

const imgs = document.querySelectorAll('img')

window.addEventListener('scroll', () => {
    imgs.forEach(img => {
        img.style.display = 'none'
    })
})
document.addEventListener('wheel', (event) => {
  if(event.deltaY>0)
   document.body.style.backgroundColor = 'yellow';
   if(event.deltaY<0)
   document.body.style.backgroundColor = 'blue';
  })
