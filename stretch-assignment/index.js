


let kelBlock = document.querySelectorAll('.block');
for (let i=0; i<kelBlock.length; i++) {
    kelBlock[i].addEventListener('click', (event) => {
	kelBlock[i].style.order = 1;
    })
}
