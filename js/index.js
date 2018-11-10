// Your code goes here

//click
const logo = document.querySelector('.logo-heading');
logo.style.cursor = 'pointer';
logo.addEventListener('click', () => logo.style.color = logo.style.color === '#F9CD81' ? 'black': '#F9CD81');

//mouseOver
const headerPicture = document.querySelector('.intro img');
    headerPicture.addEventListener('mouseover', () => headerPicture.style.borderRadius = '100px');
    headerPicture.addEventListener('mouseout', () => headerPicture.style.borderRadius = '20px');
	
//keyDown


//wheel
document.querySelector('.home').addEventListener('wheel', wheel);
 function wheel() {
    this.style.color = 'teal';
}

//drag/drop


//load
window.addEventListener('load', function(event) {
    alert('What are you waiting for?! Start your vaca today!');
 })

//focus


//resize


//scroll


//select


//doubleClick
