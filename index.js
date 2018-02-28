const redBlock = document.getElementsByClassName('block--red')[0];
const blueBlock = document.getElementsByClassName('block--blue')[0];
const greenBlock = document.getElementsByClassName('block--green')[0];
const pinkBlock = document.getElementsByClassName('block--pink')[0];
const grayBlock = document.getElementsByClassName('block--gray')[0];

let colors = document.querySelectorAll('.blocks');

// let children = grayBlock.childNodes;
// let parents = children.parentNode;

colors.forEach((color) => {
  
  const firstBlock = () => {
    return colors.firstChild.nextSibling;
  };

  color.addEventListener('click', (event) => {
    colors.insertBefore(blueBlock, firstBlock());
  });
});

