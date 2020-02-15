var tl = new TimelineMax({
    repeat:-1, 
    yoyo:true, 
    repeatDelay:1
});

document.querySelectorAll(".block").forEach((dot) => {  
    tl.to(dot, 0.5, {
        x:800,
        scale: 10,
        rotationX: 360,
        //rotationY: 180,
        //ease: Back.easeOut.config(4)
    });
    tl.to(dot, 0.5, {
        x: 0,
        scale: 1
    });
  });

  