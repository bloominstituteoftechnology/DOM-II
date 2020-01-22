// Your code goes here
// stopping propigation and stopping the object from using its default behavour
const setup = (item) => {
  item.stopPropagation();
  item.preventDefault();
};

//declaring variables for all the elements i want a nodelist for
const linkcolors = document.querySelectorAll('.nav-link');
const buttons = document.querySelectorAll('.btn');
const p = document.querySelectorAll('p');
const h4 = document.querySelectorAll('h4');
const h2 = document.querySelectorAll('h2');
const h1 = document.querySelectorAll('h1');


//declaring function to pass all needed information
const autoStyler = (nodelist, eventtype,  color, bg_color, font_family) => {
// looping through the NodeList passed through autostyler
  nodelist.forEach(link => {
//accessing each element in the NodeList passing the eventtype passed through autoStyler
    link.addEventListener(eventtype, (iteration) => {
      //running the setup function on the item of the NodeList
      setup(iteration);
      const styleSelector =
      //applying different styles and passing the color, bg_color, and font_family.
      iteration.target.style.color = color;
      iteration.target.style.backgroundColor = bg_color;
      iteration.target.style.fontFamily = font_family;

    });
  });
};


//running the function to target .nav-link
autoStyler(linkcolors, 'mouseover', 'blue', 'none', `'Roboto', sans-serif`);
autoStyler(linkcolors, 'mouseleave', 'black', 'none', `'Roboto', sans-serif`);
autoStyler(linkcolors, 'mousedown', 'GhostWhite', 'none', `'Roboto', sans-serif`);
autoStyler(linkcolors, 'mouseup', 'blue', 'none', `'Roboto', sans-serif`);
//targeting buttons
autoStyler(buttons, 'mousedown', '#17A2B8', 'white', `'Roboto', sans-serif`);
autoStyler(buttons, 'mouseup', 'white', '#17A2B8', `'Roboto', sans-serif`);
autoStyler(buttons, 'mouseleave', 'white', '#17A2B8', `'Roboto', sans-serif`);
//targeting p elements
autoStyler(p, 'dblclick', 'blue', 'none', `'Six Caps', sans-serif`);
//targeting header elemetns
autoStyler(h2, 'dblclick', 'blue', 'none', `'Bangers', cursive`);
autoStyler(h4, 'dblclick', 'blue', 'none', `'Bowlby One SC', cursive`);
autoStyler(h1, 'dblclick', 'blue', 'none', `'Source Code Pro', monospace`);
