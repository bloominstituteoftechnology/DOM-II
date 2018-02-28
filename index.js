const blocks = document.querySelector(".blocks");
const red = document.querySelector(".block--red");
const green = document.querySelector(".block--green");
const blue = document.querySelector(".block--blue");
const gray = document.querySelector(".block--gray");
const pink = document.querySelector(".block--pink");

function endMove(param) {
  clearInterval(param);
}

red.addEventListener("mousedown", (event) => {
  console.log("red is pressed");
  let margin = 10;
  const right = setInterval(() => {
    event.target.style.marginLeft = `${margin++}px`;
    if (margin === 40) endMove(right);
  }, 10);
});

red.addEventListener("mouseup", (event) => {
  console.log("red is released");
  endMove(event);
  red.style.marginLeft = "10px";
});

green.addEventListener("mousedown", (event) => {
  let margin = 10;
  const right = setInterval(() => {
    event.target.style.marginLeft = `${margin++}px`;
    if (margin === 40) endMove(right);
  }, 10);
});

green.addEventListener("mouseup", (event) => {
  endMove(event);
  green.style.marginLeft = "10px";
});

blue.addEventListener("mousedown", (event) => {
  let margin = 10;
  const right = setInterval(() => {
    event.target.style.marginLeft = `${margin++}px`;
    if (margin === 40) endMove(right);
  }, 10);
});

blue.addEventListener("mouseup", (event) => {
  endMove(event);
  blue.style.marginLeft = "10px";
});

gray.addEventListener("mousedown", (event) => {
  let margin = 10;
  const right = setInterval(() => {
    event.target.style.marginLeft = `${margin++}px`;
    if (margin === 40) endMove(right);
  }, 10);
});

gray.addEventListener("mouseup", (event) => {
  endMove(event);
  gray.style.marginLeft = "10px";
});

pink.addEventListener("mousedown", (event) => {
  let margin = 10;
  const right = setInterval(() => {
    event.target.style.marginLeft = `${margin++}px`;
    if (margin === 40) endMove(right);
  }, 10);
});

pink.addEventListener("mouseup", (event) => {
  endMove(event);
  pink.style.marginLeft = "10px";
});