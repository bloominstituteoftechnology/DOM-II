const boxRed = document.getElementsByClassName('block--red')[0];
const boxBlue = document.getElementsByClassName('block--blue')[0];
const boxGreen = document.getElementsByClassName('block--green')[0];
const boxPink = document.getElementsByClassName('block--pink')[0];
const boxGray = document.getElementsByClassName('block--gray')[0];
const boxes = document.getElementsByClassName('blocks')[0];

console.log(boxes.firstChild.nextSibling);

const getFirst = () => {
    return boxes.firstChild.nextSibling;
};
boxBlue.addEventListener('click', event => {
    boxes.insertBefore(boxBlue, getFirst());
});

boxGreen.addEventListener('click', event => {
    boxes.insertBefore(boxGreen, getFirst());
});

boxPink.addEventListener('click', event => {
    boxes.insertBefore(boxPink, getFirst());
});

boxGray.addEventListener('click', event => {
    boxes.insertBefore(boxGray, getFirst());
});

boxRed.addEventListener('click', event => {
    boxes.insertBefore(boxRed, getFirst());
});