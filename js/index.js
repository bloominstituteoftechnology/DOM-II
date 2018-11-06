//Drag and drop navbar
const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('dragstart', () => {
    if(navBar.style.height = "90px"){
        navBar.style.height = '250px';
    }
    navBar.addEventListener('dragend', () => {
        if(navBar.style.height = '250px'){
            navBar.style.height = "90px";
        }
    });
});


//Change background color to blue on keydown
const background = document.querySelector('body');
background.addEventListener('keydown', () => {
    background.style.backgroundColor = "blue";
});

//purple background on resize
window.addEventListener('resize', () => {
    background.style.backgroundColor = 'blue';
    window.addEventListener('resize', () => {
        if(background.style.backgroundColor === "blue")
        background.style.backgroundColor = "white";
    });
});