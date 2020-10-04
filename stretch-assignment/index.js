const rocket = document.querySelectorAll('.block');
// console.log(rocket);

const moveToTop = (e) => {
    const colorRocket = e.target.parentNode;
    colorRocket.prepend(e.target);
}

rocket.forEach(block => {
    block.addEventListener('click', moveToTop)
  
  const right = (e) => {
            e.target.style = 'transition: margin-left, 4s; margin-left: 1000px';
        }

        const left = (e) => {
            e.target.style = 'transition: margin-right, 4s; margin-right: 8000px';
        }

        block.addEventListener('mousedown', right);
        block.addEventListener('mouseup', left);
});