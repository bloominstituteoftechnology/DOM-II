// Your code goes here
//Nav Animations
document.querySelectorAll('nav a').forEach(item =>{
    item.addEventListener("mouseenter", () =>{
        item.style.transform = "scale(1.2)";
        item.style.transition = "transform 0.3s"
    })
})

document.querySelectorAll('nav a').forEach(item =>{
    item.addEventListener("mouseleave", () =>{
        item.style.transform = "scale(1)";
        item.style.transition = "transform 0.3s"
    })
})
//stop default
document.querySelectorAll('nav a').forEach(item =>{
    item.addEventListener("click", (event) =>{
        event.preventDefault();
    })
})


//load events
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

//Sign up events
document.querySelectorAll('.btn').forEach(item =>{
    item.addEventListener("dblclick", () =>{
        item.style.backgroundColor = "green";
    })
})

document.querySelector('.intro').forEach(item =>{
    item.addEventListener("keydown", () =>{
        item.style.display = "none";
    })
})

