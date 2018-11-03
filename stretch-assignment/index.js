const block = document.querySelectorAll('.block');


for (let i = 0; i < block.length; i++) {
    function motionFormula() {
        block[i].style.left = parseInt(block[i].style.left) + 3 + "px";
    }

    block[i].style.position = 'relative';
    block[i].style.left = '0px';
    block[i].addEventListener("mousedown", function (event) {
        const motion = setInterval(motionFormula, 50);
        window.addEventListener('mouseup', function (event) {
            clearInterval(motion);
        })
    });
}




