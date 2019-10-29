// Your code goes here
const funBusTextChange =  document.querySelector('.logo-heading');

funBusTextChange.addEventListener("mouseenter", () => {
    funBusTextChange.style.transform = 'scale(1.5)';
    funBusTextChange.style.transition = 'all 500ms';
    funBusTextChange.style.border ='2px solid black';
    funBusTextChange.style.padding = '0 1%';
    funBusTextChange.style.color = "darkorange";
})

funBusTextChange.addEventListener("mouseleave", () => {
    funBusTextChange.style.transform = 'scale(1)';
    funBusTextChange.style.transition = 'all 500ms';
    funBusTextChange.style.border ='2px solid yellow';
    funBusTextChange.style.padding = '1% 1% 0 1%';
    funBusTextChange.style.color = "black";
})