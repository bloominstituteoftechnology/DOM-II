//Created a navBar onHover event
const onHover = event => event.target.style.color = "orange";
const navBar = document.querySelectorAll('a');
navBar.forEach(anchors =>{ anchors.addEventListener('mouseover', onHover) });
navBar.forEach(anchors =>{anchors.addEventListener('mouseleave', (event) => {event.target.style.color = "black"}) });

//Styling for h2 content
const hTwoContent = document.querySelectorAll('h2');
hTwoContent.forEach(header =>{
    header.style.textAlign = "center";
});
