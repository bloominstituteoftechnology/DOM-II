// Your code goes here
let ImHungry = document.querySelector('nav').getElementsByClassName('nav-link')[0]
ImHungry.addEventListener('mouseover', () => {
    console.log("Go eat sumthin")
})

let toDo = document.querySelector('nav').getElementsByClassName('nav-link')[1]
toDo.addEventListener('click', () => {
    console.log("have fun")
})


let ctaText = document.querySelector('nav').getElementsByClassName('nav-link')[2]
ctaText.addEventListener('dblclick', () => {
    console.log("yeee")

})

window.addEventListener('scroll', () => {
document.body.style.backgroundColor = "blue" 
    });


document.addEventListener("mousedown", () => {
        ctaText.style.width = "20%";
        ctaText.style.height = "20%";
      });

      
document.addEventListener("mouseout", () => {
    ctaText.style.width = "40%";
    ctaText.style.height = "0%";
  });

document.addEventListener("select", () => {
    document.body.style.backgroundColor = "yellow"
  });

  window.addEventListener("load",() => {
    console.log('hello')
})
  window.addEventListener("beforeunload",() => {
      console.log('what ya doing?')
  })
  window.addEventListener("unload",() => {
    console.log('Bye')
})