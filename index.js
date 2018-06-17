function moveGrayBlock() {
    console.log('This is working!')
    let grayBox = document.getElementsByClassName('block--gray');
   const  newbox = grayBox[0].style.order--;
  //  const newboxs = grayBox[0].style.color = 'red';
  //   console.log(newbox);
  }

  function movePinkBlock() {
    console.log('This is working!')
    let grayBox = document.getElementsByClassName('block--pink');
   const  newbox = grayBox[0].style.order--;
  //  const newboxs = grayBox[0].style.color = 'red';
  //   console.log(newbox);
  }
  function moveGreenBlock() {
    console.log('This is working!')
    let grayBox = document.getElementsByClassName('block--green');
   const  newbox = grayBox[0].style.order--;
  //  const newboxs = grayBox[0].style.color = 'red';
  //   console.log(newbox);
  }
  function moveBlueBlock() {
    console.log('This is working!')
    let grayBox = document.getElementsByClassName('block--blue');
   const  newbox = grayBox[0].style.order--;
  //  const newboxs = grayBox[0].style.color = 'red';
  //   console.log(newbox);
  }
  function moveRedBlock() {
    console.log('This is working!')
    let grayBox = document.getElementsByClassName('block--red');
   const  newbox = grayBox[0].style.order--;
  //  const newboxs = grayBox[0].style.color = 'red';
  //   console.log(newbox);
  }

  //////////////////////////////////////////////////////////////
  // this seperates the moving up to the moving right 
  const blocks = document.querySelector('.blocks');
  const travelerEvent = (event) => {
    let distance = 0;

    const moveRight = () => {
      distance += 10;
      event.target.style.marginLeft = `${distance}px`;
    }
    setInterval(moveRight, 10);
  }

  for(let i = 0; i < blocks.children.length; i++) {
    blocks.children[i].addEventListener('click', travelerEvent);
  }

  // function moveGrayRight(event) {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--gray');
  //  const  newbox = grayBox[0].style.marginLeft = `${distance}px`;
  //   let distance; 
  //    distance += 10;
  //    setInterval(moveGrayRight, 10);
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }
  // function movePinkRight() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--pink');
  //  const  newbox = grayBox[0].style.marginLeft = '700%';
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }
  // function moveGreenRight() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--green');
  //  const  newbox = grayBox[0].style.marginLeft = '700%';
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }
  // function moveBlueRight() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--blue');
  //  const  newbox = grayBox[0].style.marginLeft = '700%';
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }
  // function moveRedRight() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--red');

  //  const  moveright = grayBox[0].style.marginLeft = '700%';
   
  //  // this is the x and y cordinate
  //  let rect = grayBox.getBoundingClientRect();

  //  //grayBox.style.top = rect.top + '50px';
  //  grayBox.style.left = rec.left+ '50px';



  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }


  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // // This is for moving back!

  // function moveGrayBack() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--gray');
  //  const  newbox = grayBox[0].style.marginLeft = '10px';
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }
  // function movePinkBack() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--pink');
  //  const  newbox = grayBox[0].style.marginLeft = '10px';
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }
  // function moveGreenBack() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--green');
  //  const  newbox = grayBox[0].style.marginLeft = '10px';
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }
  // function moveBlueBack() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--blue');
  //  const  newbox = grayBox[0].style.marginLeft = '10px';
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }
  // function moveRedBack() {
  //   console.log('This is moving  right!')
  //   let grayBox = document.getElementsByClassName('block--red');
  //  const  newbox = grayBox[0].style.marginLeft = '10px';
  // //  const newboxs = grayBox[0].style.color = 'red';
  // //   console.log(newbox);
  // }