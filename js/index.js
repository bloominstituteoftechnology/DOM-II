// Your code goes here

let header = document.querySelector('.main-navigation')
header.addEventListener('mouseover', function (event){
    event.target.style.background = 'red'
})



let images = document.querySelector('.intro')
document.addEventListener('keyup', function (event){
    if (event.key === 'Escape'){
        images.remove('img')
    }
})


window.addEventListener('load', function (event){
    images.style.background = '#D2B48C'
    // images.style.width = '500px'
})



let inverseContent = document.querySelector('.inverse-content')
inverseContent.addEventListener('wheel', function (event){
    event.stopPropagation()
    let scale = 1;
    scale += event.deltaY * -.01;
    event.target.style.transform = `scale(${scale})`; 
})



let btns = document.querySelectorAll('.btn');
console.log(btns)
btns.forEach(function(curr){
curr.addEventListener('dblclick', function(event){
    curr.style.background = 'red'
    alert('YOU CLICKED TWICE!')
})
});



let contentDestination = document.querySelector('.content-destination')
contentDestination.addEventListener('contextmenu', function (event){
    event.preventDefault()
    event.target.style.color = '#FA8072'
})



let change = document.querySelector('.logo-heading');
change.addEventListener('click', function(event){
    event.target.textContent = 'Bun Fus'
    event.target.style.color = 'yellow'
})



let upKey = document.querySelector('.text-content')
document.addEventListener('keyup', function(event){
    if(event.key === 'Shift'){
        upKey.textContent = "Let's Not!"
      } 
})


header.addEventListener('mouseout', function (event){
    event.target.style.background = 'white'
})


// const footer = document.querySelector('.footer')
// const footerPara = document.querySelector('.footer p')
// footerPara.addEventListener('cut', function (event){
//     footer.style.background = 'green'
// })

let cutter = document.querySelector('.footer p')
cutter.addEventListener('cut',function(event){
    cutter.style.color = 'orange'
})