// Your code goes here

//Expand banner on mouseover
const banner = document.querySelector('.intro img');
banner.addEventListener('mouseover', () => {
    banner.style.height = "20%";
    //Bring back Back default banner
    banner.addEventListener('mouseleave', () => {
        banner.style.height = "auto";
    });
});
//Hide banner on double click but show upon keypress
banner.addEventListener('dblclick', () => {
    banner.style.display = "none";
    window.addEventListener('scroll', () => {
        banner.style.display = "block";
    });
});

//Change background color to yellow on keydown
const background = document.querySelector('body');
background.addEventListener('keydown', () => {
    background.style.backgroundColor = "yellow";
});

//Red background on resize
window.addEventListener('resize', () => {
    background.style.backgroundColor = 'red';
    window.addEventListener('resize', () => {
        if(background.style.backgroundColor === "red")
        background.style.backgroundColor = "white";
    });
});

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

//Headers change color on scroll
window.addEventListener('scroll', () => {
    console.log("Just Keep Scrolling");
});

//Rainbow Headers on scroll
const headers = document.querySelector('.container .home h2');
headers.addEventListener('fullscreen', () => {
    headers.style.color = "blue";
});
// Your code goes here
