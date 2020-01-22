// Your code goes here
const setup = (item) => {
  item.stopPropagation();
  item.preventDefault();
};


const styling = iteration.target.style.color


const linkcolors = document.querySelectorAll('.nav-link');
const buttons = document.querySelectorAll('.btn');
const p = document.querySelectorAll('p');
const h4 = document.querySelectorAll('h4');
const h2 = document.querySelectorAll('h2');
const h1 = document.querySelectorAll('h1');



const autoStyler = (nodelist, eventtype, color, bg_color, font_family) => {

  nodelist.forEach(link => {

    link.addEventListener(eventtype, (iteration) => {
      setup(iteration);
      iteration.target.style.color = color;
      iteration.target.style.backgroundColor = bg_color;
      iteration.target.style.fontFamily = font_family;

    });
  });
};



autoStyler(linkcolors, 'mouseover', 'blue', 'none', `'Roboto', sans-serif`);
autoStyler(linkcolors, 'mouseleave', 'black', 'none', `'Roboto', sans-serif`);
autoStyler(linkcolors, 'mousedown', 'GhostWhite', 'none', `'Roboto', sans-serif`);
autoStyler(linkcolors, 'mouseup', 'blue', 'none', `'Roboto', sans-serif`);
autoStyler(buttons, 'mousedown', 'white', '#17A2B8', `'Roboto', sans-serif`);
autoStyler(buttons, 'mouseup', '#17A2B8', 'white', `'Roboto', sans-serif`);
autoStyler(buttons, 'mouseleave', 'white', '#17A2B8', `'Roboto', sans-serif`);
autoStyler(p, 'dblclick', 'blue', 'none', `'Six Caps', sans-serif`);
autoStyler(h2, 'dblclick', 'blue', 'none', `'Bangers', cursive`);
autoStyler(h4, 'dblclick', 'blue', 'none', `'Bowlby One SC', cursive`);
autoStyler(h1, 'dblclick', 'blue', 'none', `'Source Code Pro', monospace`);



// linkcolors.forEach(link =>{
//   link.addEventListener('mouseover', (iteration) =>{
//     setup(iteration);
//     iteration.target.style.color = 'blue';
//   });
// });
//
// linkcolors.forEach(link =>{
//   link.addEventListener('mouseleave', (iteration) => {
//     setup(iteration);
//     iteration.target.style.color = 'black';
//   });
// });
//
// linkcolors.forEach(link =>{
//   link.addEventListener('mousedown', (iteration) =>{
//     setup(iteration);
//     iteration.target.style.color = 'white';
//   });
// });
//
// linkcolors.forEach(link =>{
//   link.addEventListener('mousedown', (iteration) =>{
//     setup(iteration);
//     iteration.target.style.color = 'white';
//   });
// });
