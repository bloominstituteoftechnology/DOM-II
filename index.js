// Hi Frank! This is what Petrell and I worked on for DOM-II.
// He showed me originally how to do the event with one block (the red one)
// and the I asked if it'd be possible to just do with a class since they're all
// children of blocks. And this is the aftermath of all that :D I'm going to go
// over it some more to make sure it really sticks. 

const redBlock = document.getElementsByClassName('block--red')[0];
const blocks = document.getElementsByClassName('blocks')[0];
console.log(blocks.children);

class Block {
  constructor(block) {
    this.block = block;
    this.block.addEventListener('mousedown', event => {
      event.target.style.marginLeft = '20px';
    });
    this.block.addEventListener('mouseup', event => {
      event.target.style.marginLeft = '10px';
    });
  }
}

const myBlock = new Block(redBlock);
console.log(Array.from(blocks.children));
const allBlocks = Array.from(blocks.children).map(block => {
  return new Block(block);
});
