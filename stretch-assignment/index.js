var x = document.querySelectorAll(".block");
x = [].slice.call(x);

x.forEach(block => {
  block.style.position = "relative";
  block.style.left = "0px";

block.addEventListener("click", () => {
    blocks.prepend(block);
});

  block.addEventListener("mousedown", () => {
    if (block.motionHandle) {
      clearInterval(block.motionHandle);
    }
    let handle = setInterval(() => {
      block.style.left = parseInt(block.style.left) + 3 + "px";
    }, 50);
    block.motionHandle = handle;
  });

  window.addEventListener("mouseup", () => {
    clearInterval(block.motionHandle);
    block.motionHandle = 0;
    block.style.left = 0;
  });
});
