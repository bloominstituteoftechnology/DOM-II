// Events 1 (mousedown), 2 (mouseup), and 3 (mousemove)

    // Grab the page header.
    let header = document.querySelector("header");

    // Event 1 -  mousedown on header.
    header.addEventListener('mousedown', () => {
        header.style.background = "#000000"});
    // Event 2 -  mouseup on header.
    header.addEventListener('mouseup', () => {
        header.style.background = '#669900'});
    // Event 3 -  reset background color on mousemove over header.
    header.addEventListener('mousemove', () => {
        header.style.background = '#ffffff'});


// Event 4 (double click)

    // Grab the h1 heading
    let h1 = document.querySelector("h1");

    // Event 4 - rotate the h1 heading on double click.
    h1.addEventListener('dblclick', () => {
        h1.style.transform = "rotate(360deg)";
        h1.style.transition = "all 1s";
    });


// Event 5 (mouseenter) and 6(mouseout)

    // Grab the bus image.
    let bus = document.querySelector(".intro img");

    // Event 5 - rotate the bus image on mouse enter.
    bus.addEventListener('mouseenter', () => {
        bus.style.transform = "rotate(360deg)";
        bus.style.transition = "all 2s";
    });

    // Event 6 - rotate the bus image on mouse out.
    bus.addEventListener('mouseout', () => {
        bus.style.transform = "rotate(0deg)";
        bus.style.transition = "all 2s";
    });
    

// Event 7 (click)

    // Grab the intro h2 heading.
    let introH2 = document.querySelector(".intro h2");

    // Change the h2 heading background color to green on click.
    introH2.addEventListener('click', () => {
        introH2.style.background = "#699000";
    });


// Event 8 (mouseenter) and Event 9(mouseleave)

    // Grab the intro paragraph.
    let introP = document.querySelector(".intro p");

    // Event 8: change the intro paragraph backgound to black on mouseenter.
    introP.addEventListener('mouseenter', () => {
        introP.style.background = "#000000";
        introP.style.color = "#ffffff";
    });

    // Event 9: reset the paragraph background to white on mouseleave.
    introP.addEventListener('mouseleave', () => {
        introP.style.background = "#ffffff";
        introP.style.color = "#000000";
    });


// Event 10 (dragstart) and Event 11(dragend)

    // Grab the fun.jpg image.
    let funImg = document.querySelector(".inverse-content img");

    // Grab the destination.jpg image.
    let destinationImg = document.querySelector(".content-destination img");

    // Event 10a - enable dragging on the fun.jpg image to resize.
    funImg.addEventListener('dragstart', () => {
        funImg.style.transform = "scale(2)";
        funImg.style.transition = "all 2s";
    });

    // Event 10b - enable dragging on the destination.jpg image to resize.
    destinationImg.addEventListener('dragstart', () => {
        destinationImg.style.transform = "scale(2)";
        destinationImg.style.transition = "all 2s";
    });

    // Event 11a - return the fun.jpg image to its original size.
    funImg.addEventListener('dragend', () => {
        funImg.style.transform = "scale(1)";
        funImg.style.transition = "all 2s";
    });

    // Event 11b - return the destination.jpg image to its original size.
    destinationImg.addEventListener('dragend', () => {
        destinationImg.style.transform = "scale(1)";
        destinationImg.style.transition = "all 2s";
    });


// Stop Propagation

    // Grab the h4 headings.
    let h4s = document.querySelectorAll("h4");

    // Change the h4 headings' background color on click.
    h4s.addEventListener('click', (event) => {
    h4s.style.backgroundColor="#009933";

    // Stop the flow of property inheritance to child elements.
    event.stopPropagation();
    console.log("start")
    });


// Prevent Default

    // Grab the site's main navigation menu.
    let stopA = document.querySelector(".main-navigation");

    // Prevent the navigation items from performing thier default action of refreshing the page.
    stopA.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('stopped!');
    });
