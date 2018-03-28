let blocks = document.querySelector('.blocks');

let order = -1;

function blockClicked(e) {
    order--
    e.target.style.order = order; //changes order of flexbox to the top
};

blocks.addEventListener('click', blockClicked);