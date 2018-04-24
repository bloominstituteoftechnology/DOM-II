// set up array to contain custom classes of each block element
let blockClsList = [];
// custom block classes pushed into blockClsList array
for (let i = 0; i < document.getElementsByClassName('blocks')[0].children.length; i++) {
    blockClsList.push(document.getElementsByClassName('blocks')[0].children[i].classList[1]);
};
// console.log(blockClsList);
// console.log(blockClsList.length);