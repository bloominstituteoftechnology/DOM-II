const navBar = document.querySelectorAll('.nav a');
const imgs = document.querySelectorAll('img');
const signUpButtons = document.querySelectorAll('.btn');

// creates an alert when the user leave the
document.addEventListener('mouseleave', function(event) {
  alert(
    'Are you sure you want to leave the Page. We have some cool trips comming up',
  );
});

// eases the h2 in on window load
window.addEventListener('load', function() {
  const hTwos = document.querySelectorAll('h2');
  TweenLite.from(hTwos, 2, {
    x: 200,
    color: 'white',
  });
});

// creates a background and padding for nav links when mouse enters and leave the element
navBar.forEach(link => {
  link.addEventListener('mouseenter', function(event) {
    event.target.classList.toggle('navLink');
  });
});
navBar.forEach(link => {
  link.addEventListener('mouseleave', function(event) {
    event.target.classList.toggle('navLink');
  });
});

imgs.forEach((img, index) => {
  if (index > 0) {
    img.addEventListener('mouseenter', function(event) {
      event.target.classList.toggle('grow');
    });
  }
});

// enlarges img on hover
imgs.forEach((img, index) => {
  if (index > 0) {
    img.addEventListener('mouseleave', function(event) {
      event.target.classList.toggle('grow');
    });
  }
});

signUpButtons.forEach(button => {
  button.addEventListener('mouseleave', function() {
    alert("You haven't pick a trip yet. Pick one now for best savings");
  });
});
