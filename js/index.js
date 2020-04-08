// Your code goes here

const get = (selector =>{
    return document.querySelector(selector)
})

const getAll = (selector2 =>{
    return document.querySelectorAll(selector2)
})

// Click + Text Content
document.getElementById("double").addEventListener("click", callback);

function callback() {
  document.getElementById("double").textContent = "'Merica!"
}

//Font Color Change When Hovering
const selectHeading = get('.logo-heading')

selectHeading.addEventListener("mouseover", event =>{
    event.target.style.color = "red"
    
})

// Two Events Nested + Stop Propagation
const parent = get(".destination")
const child = get(".destination .btn")

parent.addEventListener("click", event => {
  event.target.style.display = "none"
});

child.addEventListener("click", event => {
  event.stopPropagation()
});


// Border Style When Pressing Any Key
const bodySelect = get('body')
bodySelect.addEventListener('keydown', event => {
    
    bodySelect.style.border = 'red solid 50px'
})



//Background Color Change When Scrolling
const bodySelect2 = get('body')
bodySelect2.addEventListener('wheel', event => {
    bodySelect2.style.backgroundColor = 'blue'
})


//Load
window.addEventListener('load', event =>{
    console.log("'Merica!")
})

//Border On H2 After Double Clicking
const heading = get('h2')
heading.addEventListener('dblclick', event => {
event.target.style.border = "solid 5px black"
})


//Image Scale-Transition With Mouse Hover On Bus Image
const bus = get('.intro img');
bus.addEventListener('mouseover', event => {
    event.target.style.transition = 'all 0.1s'
    event.target.style.transform = 'scale(2)'
})
bus.addEventListener('mouseout', ()=> {
    bus.style.transition = 'all 0.1s'
    bus.style.transform = 'scale(1)'
})  


//Color Change for Nav Links
const links = getAll('.nav-link')
links.forEach(link => {
    link.addEventListener('click', (event) => {
         link.style.color = 'red'
          event.preventDefault(); // Not sure if it works
  
    })
  }) 

  //Copy + Alert
  const copyAction = get('.content-section h2');
  copyAction.addEventListener('copy', () => {
      alert('Where we goin?');
  });
  