Navbar = document.querySelector('nav')

Navbar.addEventListener('mouseover', function(event){
    event.target.style.color = "black";
    })
//------------------------------------------------------------------------------//
Navbar.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = "orange";
    })
//------------------------------------------------------------------------------//
Bus = document.querySelector('.intro img') 

Bus.addEventListener('dblclick', function(event){
    event.target.style.width = '200px'
})
//------------------------------------------------------------------------------//
Logo = document.querySelector('.logo-heading')

document.addEventListener('keydown', function(event){
    if (event.keyCode === 70){
        console.log(event);
        this.querySelector('.logo-heading').style.display = 'none'
    }
})
//------------------------------------------------------------------------------//
Welcome = document.querySelector('.intro h2')

Welcome.addEventListener('click', function(event){
    event.target.style.letterSpacing = "20px"
})
//------------------------------------------------------------------------------//
Adv = document.querySelector('.img-content img')

Adv.addEventListener('drag', function(event){
    event.target.style.height = '100px'
})
//------------------------------------------------------------------------------//
document.addEventListener('keyup', function(event){
    if(event.keycode = 76)
    console.log(event)
    this.querySelector('.text-content h2').style.fontSize = '100px'
})
//------------------------------------------------------------------------------//
Destination = document.querySelector('.destination h4')

Destination.addEventListener('copy', function(event){
    event.target.style.color = 'blue'
})
//------------------------------------------------------------------------------//
Boat = document.querySelector('.img-fluid')

Boat.addEventListener('mousemove', function(event){
    event.target.style.border = 'solid'
})
//------------------------------------------------------------------------------//
Boat2 = document.querySelector('.content-destination img')

Boat2.addEventListener('mouseenter', function(event){
    event.target.style.cursor = 'pointer'
})