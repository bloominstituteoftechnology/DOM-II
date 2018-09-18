const block = document.querySelectorAll('div.block')

block.forEach(cb => cb.addEventListener('click', e => {
    TweenLite.to(cb, 1, {
        x: () => Math.random() * 500,
      });
}));
