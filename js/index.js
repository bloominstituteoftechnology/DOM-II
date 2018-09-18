// Your code goes here

document.querySelectorAll('a').forEach( link => {
  link.addEventListener('click', e => {
    e.preventDefault();
  })
})

const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('mouseover', e => {
    e.target.setAttribute('style', `
      background-color: white;
      filter: blur(0px);
      box-shadow: 0;
    `);
  });
})

// finds height of page in pixels
// https://stackoverflow.com/a/41180900
var pageHeight = 0;
;(function() {

  function findHighestNode(nodesList) {
      for (var i = nodesList.length - 1; i >= 0; i--) {
          if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
              var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
              pageHeight = Math.max(elHeight, pageHeight);
          }
          if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
      }
  }

  findHighestNode(document.documentElement.childNodes);

  // The entire page height is found
  console.log('Page height is', pageHeight);
})();

window.addEventListener('keydown' , e => {
  let key = Number.parseInt(e.key) / 9
  window.scroll({
    top: pageHeight * key,
    behavior: "instant"
  })
});