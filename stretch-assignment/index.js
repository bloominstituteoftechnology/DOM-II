let blocks = document.querySelectorAll("block");

blocks.forEach( item => {
    item.transition = "5s";
    gsap.to(".box", {rotation: 27, x: 100, duration: 1});

});
