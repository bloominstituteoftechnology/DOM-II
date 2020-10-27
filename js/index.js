// Event for page load
window.addEventListener('load', (event) => {
    console.log('The page has loaded')
})

// Adding subText for button presses ie: A = aqua
const subText = document.createElement ('h3')
subText.textContent = 'Press A, O, R, Y, B, W, to change colors'
subText.style.fontSize = '1.5rem'
const h1 = document.querySelector('h1')
h1.appendChild(subText)
h1.style.textAlign = 'center'

// Change the body color when a key is pressed
window.addEventListener('keydown', (event) => {
    if (event.key == 'a') {
        document.body.style.background = 'aqua'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'o') {
        document.body.style.background = 'orange'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'r') {
        document.body.style.background = 'red'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'y') {
        document.body.style.background = 'yellow'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'b') {
        document.body.style.background = 'black'
        document.body.style.visibility = 'visible'
        }

        console.log(event.key)
})

// Change the body color when a key is released
window.addEventListener('keyup', (event) => {
    if (event.key == 'a') {
        document.body.style.background = 'white'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'o') {
        document.body.style.background = 'white'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'r') {
        document.body.style.background = 'white'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'y') {
        document.body.style.background = 'white'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'b') {
        document.body.style.background = 'white'
        document.body.style.visibility = 'visible'
    }

   
    console.log(event.key)
})

const navigation = document.querySelectorAll('.nav-link');
navigation[2].href = "https://www.w3schools.com/cssref/css_colors.asp";
navigation[2].addEventListener('click', (event) => {
    event.preventDefault();
});

navigation.forEach((element) => {
    element.style.padding = "1.5rem";
    element.style.textDecoration = "none";
});

const navBar = document.querySelector('.nav');
navBar.style.padding = "3rem";
navBar.style.displayFlex = "flex";
navBar.style.justifyContent = "space-between";
navBar.style.alignItems = "space-between";
navigation.forEach((element) => {
    element.style.fontSize = "1.3rem";
    element.style.color = "black";
    
});

//console.log(navBar);
navigation.forEach((element) => element.addEventListener('mouseover', (event) => {
    element.style.transform = "scale(2)";
    element.style.background = "red";
    element.style.color = "goldenrod";
    
}));

navigation.forEach((element) => {
    element.addEventListener('mouseout', (event) => {
        element.style.transform = "none";
        element.style.background = "white";
        element.style.color = "#00BFFF";
        
    })
});

// Focus Event
window.addEventListener('focus', (event) => {
    console.log('Our minds are one you can focus')
})

// Scroll Event
window.addEventListener('scroll', (event) => {
    //alert('You are scrolling the page')
    console.log('You found the mouse wheel')
})

const titleColor = document.querySelectorAll('.text-content h2')
titleColor.forEach ('mouseover', (event) => {
    h2.style.color = 'red'
})