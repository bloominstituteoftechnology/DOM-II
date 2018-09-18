let block = document.querySelectorAll('.block');

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('mousedown', (event) => {
    TweenMax.to(block[i], 1, {x:100});
    });
}

// block[3].addEventListener('click', (event) => {
//     block[0].replaceWith(block[3]);
//     block[3].replaceWith(block[0]);
// })


// setInterval(function() {
//     block[0].addEventListener('mousedown', (event) => {
//     TweenMax.to(event.currentTarget, 1, {x:100});
//     });
// }, 1000);


// let movement = () => {
//     block[0].addEventListener('mousedown', (event) => {
//     TweenMax.to(event.currentTarget, 1, {x:100});
//     });
// }

// setInterval(movement(), 1000);