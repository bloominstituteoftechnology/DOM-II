let blockParent = document.querySelectorAll('.block');
blockParent.forEach((block, index) => {
	let increment = 0;
	block.addEventListener('mousedown', (event)=>{
		let increase = setInterval(()=>{
			increment += 10;
			block.style['margin-left'] = `${increment}px`
			if (increment > 400){
				clearInterval(increase);
			}
		}, 100)
		block.addEventListener('mouseup', ()=>{
			clearInterval(increase);
		});
	});
	block.addEventListener('mouseup', (event)=>{
		let decrease = setInterval(()=>{
			increment -= 10;
			block.style['margin-left'] = `${increment}px`
			if (increment < 20){
				clearInterval(decrease);
			}
		}, 100)
		block.addEventListener('mousedown', ()=>{
			clearInterval(decrease);
		});
	});
});