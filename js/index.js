// Your code goes here

const destBtn = document.querySelector('.btn')

// event listener using event bubbling to select all instances of button
 document.addEventListener('click', (event) => {
 	event.stopPropagation()
	if (event.target.classList.contains('btn')){
		event.target.style.color = 'rebeccapurple';
	} 
	console.log(event.target)
 }, false);

 const logoExpansion = document.querySelector('.logo-heading')

// mouseover event
  logoExpansion.addEventListener('mouseover', (event) => {
 	event.target.style.fontSize = '50px';
 	console.log(logoExpansion)
 });

  const expandNavigation = document.querySelector('.nav-link')


  // document.addEventListener('mouseenter', (event) => {
  // 	event.stopPropagation()
  // 	if (event.target.classList.contains('.nav-link')){
  // 		event.target.style.fontSize = '20px';
  // 		event.target.style.color = 'silver';
  // 	}
  // 	console.log(event.target)
  // }, false);

  const busImg = document.querySelector('img')

  busImg.addEventListener('dblclick', (event) => {
  		event.target.style.opacity = 0.5;
  })