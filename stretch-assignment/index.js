const boxToTop = document.querySelectorAll('.blocks');

// boxToTop.addEventListener('click' function (event) {
//     let first = boxToTop.splice(0,1);
//     boxToTop.push(first);
// });

for (let i = 0; i < boxToTop; i++) {
    boxToTop[i].addEventListener('click' function (event) {
        let first = boxToTop.splice(0, 1);
        boxToTop.push(first[0]);
});
}