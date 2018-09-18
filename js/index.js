// Your code goes here
//
// use wheel to change home container background color
//
function getRandomColor() {
  const colors = [];
  for (let i = 0; i < 3; i++) {
    const randomColor = Math.floor(Math.random() * 256);
    colors.push(randomColor);
  }
  return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}
const home = document.querySelector('.home');
home.addEventListener('wheel', (event) => {
  console.log('hello');
  const randomColor = getRandomColor();
  console.log(randomColor);
  event.currentTarget.style.backgroundColor = `${randomColor}`;
});
