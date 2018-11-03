const blockParent = document.querySelector('.blocks');
blockParent.addEventListener('click', (e) => {
    if (e.target === blockParent) return;
        const temp = e.target;
        blockParent.removeChild(e.target);
        blockParent.prepend(temp);
});

blockParent.addEventListener('mousedown', (e) => {
    const timer = setTimeout(() => {
        let position = 0;
        const move = setInterval(() => {
            position += 10;
            e.target.style.transform = `translateX(${position}px)`;
            blockParent.addEventListener('mouseup', () => {
                e.target.style.transform = '';
                clearInterval(move);
            });
        }, 50);
    }, 500);
    blockParent.addEventListener('mouseup', () => clearTimeout(timer));
});