TweenMax.staggerTo(".block", 2, {
    scale:0.1,
    y:40,
    stagger:{
        amount: 2, //total seconds to divide up among staggers
        from: "center", //or an index value. Determines where staggers originate
        grid:"auto", //or [columns, rows] 
        ease: Power1.easeIn //determines spacing
    }
});