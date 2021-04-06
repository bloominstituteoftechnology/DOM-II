// Your code goes here
const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {btn.addEventListener("click",
    (event)=> {event.target.style.backgroundColor = 'red';});

    })

    const links = document.querySelectorAll(".nav")
    links.forEach(link => {link.addEventListener("mouseover",
     (event) => { event.target.style.color = "red";});
    })

    const text = document.querySelector("p");
    Array.from(text).forEach(Element => {
        Element.addEventListener("dblclick", (event => {
            event.target.style.backgroundColor = "pink";
        }));
    })