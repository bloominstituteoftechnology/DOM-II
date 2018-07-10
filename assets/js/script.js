TweenMax.to('.progress-bar', 4, {
  width: '100%',
  ease: Sine.easeOut,
  onComplete: () => {
    TweenMax.to('.cover', 0.5, {
      opacity: 0,
      onComplete: () =>
        (document.querySelector('.cover').style.display = 'none')
    });
    onReady();
  }
});

function onReady() {
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

  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const text = document.querySelector('input').value;
    text
      .toLowerCase()
      .split('')
      .filter(x => /[a-z]/.test(x))
      .forEach((key, idx) => {
        setTimeout(playSoundWithAnim, idx * 300, key);
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
}
