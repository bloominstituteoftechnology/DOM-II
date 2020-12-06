// Your code goes here


/** ✅`mouseover`
  * ✅`keydown` 
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * ✅scroll` 
  * `select`
  * ✅`dblclick` 
  * `drag / drop`
    ✅`mouseout`
    ✅`click`*/

//sign up buttons manipulation
//const funButton = document.querySelectorAll('.destination .btn')



//single click event
const funLink = document.querySelectorAll('a')

funLink[0].addEventListener('click', () => {
    funLink[0].style.background = 'blue';
    funLink[1].style.background = 'red'
    funLink[2].style.background = 'lime';
    funLink[3].style.background = 'purple'
  })



const funBus = document.querySelectorAll('a')


//doulbe click event
const funImg = document.querySelector('.intro img')

funImg.addEventListener('dblclick', () => {
    funImg.style.transform = 'scale(1.5)'  
    alert('All aboard!')
    
});

funImg.addEventListener('mouseout', () => {
  funImg.style.transform = 'scale(1.0)'  
  
  
});


//mouseover event

const funButton = document.querySelectorAll('.destination .btn')

console.log('funButton', funButton)

funButton.forEach(x => {
    x.addEventListener('mouseover',()=> {
      x.style.color = 'purple'
      x.style.transform = 'scale(1.5)'
    })
  });

//mouseout event

funButton.forEach(x => {
  x.addEventListener('mouseout',()=> {
    x.style.color = 'white'
    x.style.transform = 'scale(1.0)'
  })
});


//scroll event
const funPara = document.querySelectorAll('p')



document.addEventListener('scroll', () => {
  funPara.forEach(x => {
    x.style.fontFamily = 'sans serif'
    x.style.fontWeight = 'bold'
    x.style.color = 'blue'
})
})
  

//keydown event
const esc = document.querySelector('h1')



document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    esc.textContent = "you dont wanna miss this"
  }

})

//resize event
const zoomImg = document.querySelectorAll('.content-section img')


  zoomImg.addEventListener("mouseenter", () => {
    zoomImg.style.transform = "scale(1.5)"


  })
