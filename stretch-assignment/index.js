const blockList = document.querySelectorAll('.block');

let order = -1;
let interval = 0;

blockList.forEach(block => {

  block.style.position = "relative";
  block.style.left = '0px';

  block.addEventListener('mousedown', event => {

    event.preventDefault();

    event.target.style.order = order;
    order--;

    let blockStart = 0;

    interval = setInterval(() => {

      blockStart++;

      block.style.left = blockStart + "px";

    }, 20);

  });

  block.addEventListener('mousemove', event => {

    event.preventDefault();

  });

  block.addEventListener('mouseup', event => {

    clearInterval(interval);

  });

  block.addEventListener('mouseleave', event => {

    clearInterval(interval);

  });

});
