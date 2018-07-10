let blockParent = document.querySelectorAll('.block');
blockParent.forEach((block, index) => {
	let increment = 0;
	block.addEventListener('mousedown', ()=>{
		setInterval(()=>{
			increment += 10;
			console.log(increment);
			block.style['margin-left'] = `${increment}px`
		}, 100)
	})
});

