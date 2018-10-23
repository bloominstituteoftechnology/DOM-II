// Your code goes here

titleText.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
  });

  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert(`You just pressed the letter ${keyName}!`);
});

buttons[0].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});
buttons[1].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});
buttons[2].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});

window.addEventListener('load', () => {
    console.log('Fun Bus is Loading!');
  });

  logIn.addEventListener('focus', (event) => {
    event.target.style.background = 'gray';
    event.target.style.color = 'white';
  }, true);

  logIn.addEventListener('blur', (event) => {
    event.target.style.background = "";
}, true);

document.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'You copied some text from the Fun Bus website!');
    event.preventDefault();
});

window.addEventListener('scroll', () => {
    console.log('scrolled!');
});

headingSection.addEventListener('click', (event) => {
    event.target.style = 'background-color: purple';
});

myHeading.addEventListener('click', (event) => {
    event.target.style.color = "yellow";
    event.stopPropagation();
})

introImg.addEventListener('dblclick', (event) => {
    event.currentTarget.classList.toggle('hide');
  });