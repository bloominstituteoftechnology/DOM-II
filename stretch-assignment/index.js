const blocks = document.querySelectorAll(".block");

blocks[0].addEventListener("click", () => {
    blocks[1].classList.remove("number-one");
    blocks[2].classList.remove("number-one");
    blocks[3].classList.remove("number-one");
    blocks[4].classList.remove("number-one");
    blocks[0].classList.add("number-one");
});

blocks[1].addEventListener("click", () => {
    blocks[0].classList.remove("number-one");
    blocks[2].classList.remove("number-one");
    blocks[3].classList.remove("number-one");
    blocks[4].classList.remove("number-one");
    blocks[1].classList.add("number-one");
});

blocks[2].addEventListener("click", () => {
    blocks[0].classList.remove("number-one");
    blocks[1].classList.remove("number-one");
    blocks[3].classList.remove("number-one");
    blocks[4].classList.remove("number-one");
    blocks[2].classList.add("number-one");
});

blocks[3].addEventListener("click", () => {
    blocks[0].classList.remove("number-one");
    blocks[1].classList.remove("number-one");
    blocks[2].classList.remove("number-one");
    blocks[4].classList.remove("number-one");
    blocks[3].classList.add("number-one");
});

blocks[4].addEventListener("click", () => {
    blocks[0].classList.remove("number-one");
    blocks[1].classList.remove("number-one");
    blocks[2].classList.remove("number-one");
    blocks[3].classList.remove("number-one");
    blocks[4].classList.add("number-one");
});

blocks[0].addEventListener("mousedown", (e) => {
    TweenMax.to(e.currentTarget, 10, {
        x: 2000
    })
    })