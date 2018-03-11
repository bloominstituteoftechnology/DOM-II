const el1 = document.querySelectorAll('.block');

const blockArray = Array.from(el1);

Array.from(el1).forEach( (e) => {
  
  e.addEventListener("mousedown", () => {
  e.style.marginLeft = "500px";
  });
  
  e.addEventListener("mouseup", () => {
    e.style.marginLeft = "10px";
  })
  
});
