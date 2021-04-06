// click event 
const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {btn.addEventListener("click",
    (event)=> {event.target.style.backgroundColor = 'red';});

    })
// mouse over event 
    const links = document.querySelectorAll(".nav")
    links.forEach(link => {link.addEventListener("mouseover",
     (event) => { event.target.style.color = "red";});
    })
// dbl click event
    const text = document.querySelector("p");
    Array.from(text).forEach(Element => {
        Element.addEventListener("dblclick", (event => {
            event.target.style.backgroundColor = "pink";
        }));
    })
// key down event
    const h4 = document.querySelectorAll("h4");
    Array.from(h4).forEach(Element => {
        Element.addEventListener("keydown", (event =>{
            event.target.style.backgroundColor = "yellow";

        }))
    })
// wheel event
    const bus = document.querySelectorAll("h1");
    Array.from(bus).forEach(Element => {
        Element.addEventListener("wheel", (event)=>{
            event.target.style.backgroundColor = "pink";

        })
    })

// mouseenter event
const h2 = document.querySelector("h2")
h2.addEventListener("mouseenter", (event)=> {
    event.target.style.fontSize = "3rem";
    
})