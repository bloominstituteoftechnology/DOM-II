// Your code goes here

//shawdow-box over every image hovered
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

//pick the first letter of each h2 and it will be selected
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

//any h2 that you double
h2.forEach(item => {
    item.addEventListener('dblclick', (event) => {
    if (item.style.color === '') {
        event.target.style.color = 'red';
    } else if (item.style.color === 'red') {
        event.target.style.color = '';
    }
    })
})

//todo -- I need to check why this does not work

// const destination = document.querySelectorAll('.destination');
// const destinationParent = document.querySelector('.content-pick')

// const blackAndWhite = (event) => {
//     destinationParent.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
//     destination[currentTarget].style.backgroundColor = 'white';
// }

// destination.forEach(item => {
//     item.addEventListener('mouseover', blackAndWhite)
// });