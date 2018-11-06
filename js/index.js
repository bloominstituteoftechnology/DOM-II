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
    background.style.backgroundColor = 'purple';
        window.addEventListener('resize', () => {
            if(background.style.backgroundColor === "purple")
                background.style.backgroundColor = "white";
    });
});


//Expand banner on mouseover
const banner = document.querySelector('.intro img');
    banner.addEventListener('mouseover', () => {
        banner.style.height = "20%";
    
//Bring back Back default banner
banner.addEventListener('mouseleave', () => {
    banner.style.height = "auto";
    });
});
//Hide banner on double click
banner.addEventListener('dblclick', () => {
    banner.style.display = "none";
//but show up on keypress pr scroll
        window.addEventListener('scroll', () => {
            banner.style.display = "block";
    });
});