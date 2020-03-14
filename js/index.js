const onHover = event => event.target.style.color = "red";
const navBar = document.querySelectorAll('a');
navBar.forEach(anchors =>{ anchors.addEventListener('mouseover', onHover) });
navBar.forEach(anchors =>{anchors.addEventListener('mouseleave', (event) => {event.target.style.color = "black"}) });