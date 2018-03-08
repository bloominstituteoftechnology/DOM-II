const el1 = document.querySelectorAll('.block');

const blockArray = Array.from(el1);

Array.from(el1).forEach( (e) => {
  
  e.addEventListener("click", () => {
  e.parentElement.prepend(e);
  });
  
  
});
