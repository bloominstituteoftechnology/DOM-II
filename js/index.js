// img mouseenter
const mapImage = document.querySelector('.img-content');

mapImage.addEventListener('mouseenter', () => {
    mapImage.style.transform = "scale(1.2)";
    mapImage.style.transition = "all 0.3s";
});


// we can also use (event) inside the parameters => event.style...

//mouseleave 
mapImage.addEventListener('mouseleave',() => {
    mapImage.style.transform = 'scale(1)';
});


// keydown

// const passCode = document.addEventListener('keydown' event =>{
//     if(event.isComposing || event.keyCode === 831) {
//         return; 
//     }
//     window.alert(YOU JUST BEEN HACKED); 
// });



// dbclick


const changeImg = 