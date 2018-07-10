window.addEventListener('keydown', ({ code }) => {
  if (/Key[A-Z]/.test(code)) {
    const key = code.charAt(code.length - 1).toLowerCase();
    playSoundWithAnim(key);
  }
});

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseover', ({ target }) => {
    const key = Number(target.id.match(/(\d+)/)[0]) + 96;
    playSoundWithAnim(String.fromCharCode(key));
  });
});

function playSoundWithAnim(key) {
  sounds[key].play();
  const target = `#box${key.charCodeAt(0) - 96}`;
  TweenMax.to(target, 0.2, {
    scale: 1.5,
    onComplete: () => {
      TweenMax.to(target, 0.1, {
        scale: 1
      });
    }
  });
}
