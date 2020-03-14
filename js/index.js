// Your code goes here
const busImage = document.querySelector('header img');

busImage.addEventListener('mouseenter', () => {
busImage.style.transform = 'scale(1.2)';
busImage.style.transition = 'all 0.4s';
})

busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = 'scale(1)'
    // busImage.style.transition = 'all .4s'
})

const logo = document.querySelector('header h1');

// logo.addEventListener('dblclick', ()=>{
//     logo.textContent = 'Bus Fun';
// })

logo.addEventListener('dblclick', ()=>{
    if(logo.textContent === 'Bus Fun'){
        logo.textContent = 'Fun Bus'
    }
    else(logo.textContent = 'Bus Fun')
})

const imgContent = document.getElementsByClassName('img-content');

console.log(imgContent);

window.addEventListener('resize', () =>{
    imgContent[0].children[0].src = "img/fun.jpg";
    imgContent[1].children[0].src = "img/adventure.jpg";
}
)