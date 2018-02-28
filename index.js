const box1 = document.getElementsByClassName("block--red")[0];
const box2 = document.getElementsByClassName("block--blue")[0];
const box3 = document.getElementsByClassName("block--green")[0];
const box4 = document.getElementsByClassName("block--pink")[0];
const box5 = document.getElementsByClassName("block--gray")[0];

box1.addEventListener('click', (event) => {
    box1.style.order = -1;
    box2.style.order = 0;
    box3.style.order = 1;
    box4.style.order = 2;
    box5.style.order = 3;
})

box2.addEventListener('click', (event) => {
    box1.style.order = 3;
    box2.style.order = -1;
    box3.style.order = 0;
    box4.style.order = 1;
    box5.style.order = 2;
})

box3.addEventListener('click', (event) => {
    box1.style.order = 2;
    box2.style.order = 3;
    box3.style.order = -1;
    box4.style.order = 0;
    box5.style.order = 1;
})

box4.addEventListener('click', (event) => {
    box1.style.order = 1;
    box2.style.order = 2;
    box3.style.order = 3;
    box4.style.order = -1;
    box5.style.order = 0;
})

box5.addEventListener('click', (event) => {
    box1.style.order = 0;
    box2.style.order = 1;
    box3.style.order = 2;
    box4.style.order = 3;
    box5.style.order = -1;
})
