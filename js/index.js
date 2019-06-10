// Your code goes here

//Make images go opaque and blur when moussed over and restores when mouse curser leaves
const images = document.querySelectorAll('img')
images.forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.opacity = 0.5;
        this.style.filter = 'blur(1.5px)'
    })
    img.addEventListener('mouseleave', function() {
        this.style.opacity = 1;
        this.style.filter = 'blur(0)'
    })
});

// Randomizes background of .main-naviagion and body when C key pressed
window.addEventListener('keydown', event => {
    if (event.key == 'c') {
        const navContainer = document.querySelector('.main-navigation').style.background = randomColor();
        document.body.style.background = randomColor();        
    }
})

function randomColor () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Cursor over fun buss img is pointer and Fun Buss img removed when dragged
const headerImg = document.querySelector(".intro img")
headerImg.style.cursor = "pointer"
headerImg.addEventListener('drag', function() {
  headerImg.style.display = "none"
})

// Message when scrolling to end of page
window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      alert(`End of the page!`)
    }
  })

// Changes color back to white when double clicking
window.addEventListener('dblclick', () => {
    const navContainer = document.querySelector('.main-navigation').style.background = 'white';
    document.body.style.background = 'white';
});

// Change buttons to display Mouse Over when mousedover. Changes buttons back when mouse leaves
const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('mouseover', () => btn.textContent = "Mouse Over"))
buttons.forEach(btn => btn.addEventListener('mouseleave', () => btn.textContent = "Sign Me Up!"))


// Event propagation stopped
const boatContainer = document.querySelector('.content-destination');
const boatImg = document.querySelector('.content-destination img');
boatContainer.addEventListener('click', (event) => {
    alert('Boat Container')
});
boatImg.addEventListener('click', (event) => {
    alert('Boat Image');
    event.stopPropagation();
});

// PreventDefault. Spacebar will not scroll page
document.documentElement.addEventListener('keydown', function (e) {
    if ( ( e.keycode || e.which ) == 32) {
        e.preventDefault();
    }
}, false);