let blocks = document.querySelectorAll(".block");

let first = -1;
blocks.forEach(el => el.addEventListener("click", event => {
    // let tmp = blocks[0].getBoundingClientRect().top;
    // let tmp2 = event.target.getBoundingClientRect().top;
    // TweenMax.to(el, 10, {y:tmp-tmp2});
    // TweenMax.to(blocks[0], 2, {y:tmp2-tmp});

    el.style.order = --first;
    
}));

blocks.forEach(el => el.addEventListener("mousedown", event => {
    TweenMax.to(el, 15, {x:2000, repeat:-1});
}));

blocks.forEach(el => el.addEventListener("mouseup", event => {
    TweenMax.to(el, 1, {x:0});
}));

blocks.forEach(el => el.addEventListener("mouseleave", event => {
    TweenMax.to(el, 1, {x:0});
}));

