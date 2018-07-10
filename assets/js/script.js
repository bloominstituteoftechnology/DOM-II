window.addEventListener('keydown', ({ code }) => {
  if (/Key[A-Z]/.test(code)) {
    const key = code.charAt(code.length - 1).toLowerCase();
    sounds[key].play();
  }
});
