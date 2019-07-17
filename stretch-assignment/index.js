// tweenMax.to(".block block--gray", 2, { left: 600 });

/*
const gone = document.getElementsByClassName("block");
gone.onclick = function ({
    start = Date.now()
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        blocks.style.left = timePassed / + 'px';
        if (timePassed > 2000) clearInterval(timer);
    }, 20);
};
*/



/*
var elem = document.querySelector(".block"),
    left = 0
timer = setInterval(function () {
    elem.style.top = (top += 10) + "px";
    if (top == 400) {
        clearInterval(timer);
    }
}, 20);
*/


class Block {
    constructor(block) {
        this.block = block;
        this.block.addEventListener('click', this.ship.bind(this));
    }
    ship() {
        (block => {
            if (block == event.target) {
                event.target.style.order = "+1";
            } else {
                this.block.style.order = "0";
            }
        })
    }
}

const blocks = document.querySelectorAll('.block');
blocks.forEach(block => new Block(block));
console.log(blocks);
