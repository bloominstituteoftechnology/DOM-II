// Your code goes here
const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {btn.addEventListener("click",
    (event)=> {event.target.style.backgroundColor = 'red';});

    })