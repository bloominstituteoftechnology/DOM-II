// Your code goes here
/* 
  copy
  keypress
  click
  doubleclick
  mouseenter
  mouseleave
  mouseover
  * fullscreenchange - fullscreenchange - Bubbles = Yes
  * scroll   - onscroll   - Bubbles = Yes
  wheel
  resize   - onresize   - Bubbles = No - window object only
  focus    - onfocus    - Bubbles = No
  blur     - onblur     - Bubbles = No
  focusin  - onfocusin  - Bubbles = Yes
  focusout - onfocusout - Bubbles = Yes
*/

// 1- Create a function called 'get'
// that takes a CSS selector as its argument
// and executes document.querySelector with the argument.
const get = (selector) => {
  return document.querySelector(selector)
}