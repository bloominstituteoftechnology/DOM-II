const blocks = document.querySelector('.blocks');

//  let order = -1;
//const rocketEvent = (event) => {
//  const child = event.target;
// child.style.order = order;
// order--;
//}

//for (let i = 0; i < blocks.children.length; i++) {
//    blocks.children[i].addEventListener('click', rocketEvent);
//}

const travelerEvent = (event) => {
    let distance = 0;

    const moveRight = () => {
        distance += 10;
        event.target.style.marginLeft = distance + 'px';
    }
    setInterval(moveRight, 10);
}
for (let i = 0; i < blocks.children.length; i++) {
    blocks.children[i].addEventListener('click', travelerEvent);
}






