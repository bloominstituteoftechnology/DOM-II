// block.addEventListener('click', (e) => {
//     container.prepend(e.target);
// });

const container = document.querySelector('.blocks');
let count = 0; 
let disable = false;

document.querySelectorAll('.block').forEach((block) => {

    console.log(block);
    let interval = null;

    block.addEventListener('mousedown', (e) => {
        console.log(block);
        count =  10;
        disable = true;
        if(disable) {
        interval = setInterval(() => {
                count += 5;
                e.target.style.left = count + 'px';
            }, 200);
        }
    });
    
    block.addEventListener('mouseup', (e) => {
        clearInterval(interval);
        disable = false;
        e.target.style.left = '0px';
    });

    block.addEventListener('click', (e) => {
        container.prepend(e.target);
    });
});
