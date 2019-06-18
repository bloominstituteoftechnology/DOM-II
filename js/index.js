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
    event.preventDefault();
    logo.textContent = navItems[0].textContent;
    console.log(logo.textContent);
});
navItems[1].addEventListener("click", event => {
    event.preventDefault();
    logo.textContent = navItems[1].textContent;
    console.log(logo.textContent);
});
navItems[2].addEventListener("click", event => {
    event.preventDefault();
    logo.textContent = navItems[2].textContent;
    console.log(logo.textContent);
});
navItems[3].addEventListener("click", event => {
    event.preventDefault();
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


// #8 Keydown Alert
document.addEventListener("keydown", event => {
    alert("This site doesn't have a single place for you to enter text. Stop it.")
    alert("Seriously. Not cool.")
})

// #9 Images

let imgs = document.querySelectorAll('img');
console.log(imgs);

imgs[0].addEventListener("mouseover", event => {
    event.target.style.transform = "scale(1.5)";
    event.target.style.borderRadius = "20%";
    // event.target.style.zIndex = "-99";
})
// Not sure why zIndex isn't working as intended
imgs[0].addEventListener("mouseout", event => {
    event.target.style.transform = "scale(1)";
    event.target.style.borderRadius = "0%";
    // event.target.style.zIndex = "-99";
})


imgs[1].addEventListener("click", event => {
    event.target.style.borderRadius = "50%";
    event.target.style.transform = "rotate(3600deg)";
    event.target.style.transition = "3s";
})


imgs[2].addEventListener("mouseover", event => {
    event.target.style.borderRadius = "25%";
})
imgs[2].addEventListener("mouseout", event => {
    event.target.style.borderRadius = "5%";
})

imgs[3].addEventListener("click", event => {
    event.target.style.borderRadius = "50%";
    event.target.style.transform = "rotate(3600deg)";
    event.target.style.transition = "3s";
})
