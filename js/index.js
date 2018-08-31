// Your code goes here

//shawdow over images
const images =  document.querySelectorAll('img');


const shadowUnder = (event) => {
    event.target.classList.toggle('hoverShadow');
}

const parentShadowUnder = (event) => {
    event.target.parentNode.classList.toggle('hoverShadow');
}

images.forEach(item => {
    item.addEventListener('mouseenter', shadowUnder);
    item.addEventListener('mouseleave', shadowUnder);
});

//pick the first letter of each 2 and it will be selected
const h2 = document.querySelectorAll('h2');
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w' :
        h2[0].parentNode.classList.toggle('hoverShadow');
        break;

        case 'l' :
        h2[1].parentNode.classList.toggle('hoverShadow');
        break;

        case 'a' :
        h2[2].parentNode.classList.toggle('hoverShadow');
        break;

        case 'p' :
        h2[3].parentNode.classList.toggle('hoverShadow');
    }
})

h2.forEach(item => {
    item.addEventListener('dblclick', (event) => {
    if (item.style.color === '') {
        event.target.style.color = 'red';
    } else if (item.style.color === 'red') {
        event.target.style.color = '';
    }
    })
})