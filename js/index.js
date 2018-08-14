const headerLogo = document.querySelector('.logo-heading');

headerLogo.addEventListener('click', () => { 
    console.log("Click occured!");
  headerLogo.classList.toggle('dance');
});