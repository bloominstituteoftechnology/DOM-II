// element.addEventListener(event, function, useCapture);

// #1 Hover over logo
const logo = document.querySelector('.logo-heading');
console.log(logo);

logo.addEventListener("mouseover", event => {
    logo.style.backgroundColor = 'Black';
    logo.style.color = 'White';
    logo.style.transform = "scale(1.5)";
});

// #2 Hover off
logo.addEventListener("mouseout", event => {
    logo.style.backgroundColor = 'White';
    logo.style.color = 'Black';
    logo.style.transform = "scale(1.0)";
});

// #3 Logo changes from nav
let navItems = document.querySelectorAll('header nav a');

/*
navItems.forEach((item) => {
    item.addEventListener("click", event => {
        logo.textContent = navItems[i].textContent;
        console.log(logo.textContent);
    });
})
*/
navItems[0].addEventListener("click", event => {
    logo.textContent = navItems[0].textContent;
    console.log(logo.textContent);
});
navItems[1].addEventListener("click", event => {
    logo.textContent = navItems[1].textContent;
    console.log(logo.textContent);
});
navItems[2].addEventListener("click", event => {
    logo.textContent = navItems[2].textContent;
    console.log(logo.textContent);
});
navItems[3].addEventListener("click", event => {
    logo.textContent = navItems[3].textContent;
    console.log(logo.textContent);
});

// Buttons
let btns = document.querySelectorAll('.destination .btn')
console.log(btns);

// #4 Fun in The Sun
btns[0].addEventListener("dblclick", event => {
    alert("Thank you for signing up for Fun In The Sun!");
    btns[0].style.opacity = ("0.6")
    btns[0].style.color = 'Black';
});

// #5 Mountain Excursion
btns[1].addEventListener("click", event => {
    alert("Thank you for signing up for the Mountain Excursion!");
    btns[1].style.opacity = ("0.6")
    btns[1].style.backgroundColor = ("#d2b48c")
    btns[1].style.color = 'Black';
});

// #6 Island Getaway
btns[2].addEventListener("click", event => {
    alert("Thank you for signing up for the Island Getaway!");
    btns[2].style.opacity = ("0.6")
    btns[2].style.backgroundColor = ("#008000")
    btns[2].style.color = 'Black';
});

btns[2].addEventListener("mouseleave", event => {
    alert("Don't you want to sign up?! Click the button!");
});

// #7 Paragraphs
let pgs = document.querySelectorAll('p')
console.log(pgs);
console.log(pgs[0]);


pgs.forEach((paragraph) => {
    paragraph.addEventListener("copy", event => {
        alert("Do not copy our content!");
    });
});
