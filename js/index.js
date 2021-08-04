// Your code goes here

const navBar = document.querySelectorAll('.nav-link');

// navBar[0].onClick = function(event) {
// }

navBar[0].addEventListener('click', event => {
    //Added a link to the Nav to demonstrate this working succesfully, the first one works and the second does not. This was done intentionally 
    event.preventDefault()
    console.log(`The amount of times I have cried ${event.type}`)
})


// navBar[1].onmouseover = function(event) {
    
// }

navBar[1].addEventListener('mouseover', event => {
    console.log(`Pain counter ${event.type}`)
})


navBar[2].addEventListener('mouseenter', event => {
    navBar[2].style.border = '5px dotted orange';
    console.log(`Time spent staring at code ${event.type}`)
  })
  
  navBar[2].addEventListener('mouseleave', event => {
    navBar[2].style.border = '0px dotted orange';
    console.log(`Time spent staring at ceiling ${event.type}`)
  })

  navBar[3].addEventListener('mousedown', event => {
    event.target.style.backgroundColor = 'grey';
    console.log(`How many times I fell asleep in my chair ${event.type}`)
  })

  navBar[3].addEventListener('mouseup', event => {
    event.target.style.backgroundColor = 'none';
    console.log(`How many strands of hair fell out while coding ${event.type}`)
  })


  const midImg = document.querySelectorAll('img');
  
  midImg[0].addEventListener('dblclick', event => {
   
    if (event.target.style.width == '50%') {
        midImg[0].style.width = '100%';
    midImg[0].style.height = '100%';
    } else {
        midImg[0].style.width = '50%';
        midImg[0].style.height = '50%'; 
    }
    event.stopPropagation()
})


window.addEventListener('resize', event => {
midImg[1].style.border = '4px solid black'
})
  
window.addEventListener('keydown', event =>{
    if (midImg[2].style.width == '50%') {
        midImg[2].style.width = '100%';
    midImg[2].style.height = '100%';
    } else {
        midImg[2].style.width = '50%';
        midImg[2].style.height = '50%'; 
    }
})

midImg[3].addEventListener('click', event =>{
    if (midImg[3].style.width == '50%') {
        midImg[3].style.width = '100%';
    midImg[3].style.height = '100%';
    } else {
        midImg[3].style.width = '50%';
        midImg[3].style.height = '50%'; 
    }
    event.stopPropagation()
})


document.querySelector('.content-destination').addEventListener('click', event => {
    document.querySelector('.content-destination').style.color = 'red';
    
})
