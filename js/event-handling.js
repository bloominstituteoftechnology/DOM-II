console.log("events",navItem);

// const container = document.querySelector('.container');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// // background: linear-gradient(to bottom right, red, yellow);

container.addEventListener('mouseover',()=>{
    container.style.background = `linear-gradient(to bottom right, ${getRandomColor()}, ${getRandomColor()})`;
});

nav.addEventListener('click', (event)=>{
    // event.preventDefault();
    console.log(event.target);
    event.target.style.color = (event.target.style.color === 'black') ? 'white' : 'black';
});