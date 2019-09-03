// Your code goes here
/*
* [ ] `mouseover`
* [ ] `keydown`
* [ ] `wheel`
* [ ] `drag / drop`
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`
*/


//Nav links scale on hover
const linkScaleUp = document.querySelectorAll(".nav-link");
linkScaleUp.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.color = "#17A2B8";
        item.style.transform = 'scale(1.2)';
        item.style.transition = 'transform 0.3s';
    })

    item.addEventListener('mouseleave', event => {
        item.style.color = "#212529";
        item.style.transform = 'scale(1.0)';
        item.style.transition = 'transform 0.3s';
    })
});

//DARK MODE
const darkMode = document.querySelector('body');
darkMode.addEventListener("keydown", e => {
    darkMode.style.backgroundColor = "#696969";
    darkMode.style.color = "white";
});

//Prevents images from being saved by blocking the context menu from pulling up
const noImgSave = document.querySelectorAll('img');
noImgSave.forEach(item => {
    item.addEventListener('contextmenu', e => {
    e.preventDefault();
    })
});





