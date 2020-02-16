// block.addEventListener('click', (e) => {
//     container.prepend(e.target);
// });

const container = document.querySelector('.blocks');
let blocks = document.querySelectorAll('.block');
let count = 0; 
let disable = false;

document.querySelectorAll('.blocks').forEach((block) => {
    block.addEventListener('mousedown', (e) => {
        count = 10;
        disable = true;
        setInterval(() => {
            if(disable) {
                count += 5;
                e.target.style.marginLeft = count + 'px';
            }
        }, 200);
        
    });
    
    block.addEventListener('mouseup', (e) => {
        disable = false;
        setInterval(() => {
            if(!disable) {
                e.target.style.marginLeft = null;
                clearInterval();
            }
        }, 400);
    });

    block.addEventListener('click', (e) => {
        container.prepend(e.target);
    });
});
