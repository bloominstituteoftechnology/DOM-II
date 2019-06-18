// element.addEventListener(event, function, useCapture);

// #1 Hover over logo
const logo = document.querySelector('.logo-heading');
console.log(logo);

logo.addEventListener("mouseover", event => {
    logo.style.backgroundColor = 'Black';
    logo.style.color = 'White';
    logo.style.transform = "scale(1.5)";
})

// #2 Hover off
logo.addEventListener("mouseout", event => {
    logo.style.backgroundColor = 'White';
    logo.style.color = 'Black';
    logo.style.transform = "scale(1.0)";
})

// #3 Logo double click
logo.addEventListener("dblclick", event => {
    logo.style.transform = "scale(1.1)";
})
