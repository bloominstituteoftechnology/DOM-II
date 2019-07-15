class Block {
    constructor(el, i) {
      this.el = el;
      this.blocks = document.querySelectorAll(".block");
      this.el.style.order = 0;
      this.el.style.position = "relative";
      this.el.style.left = 0;
      this.myInterval;
      this.el.addEventListener("click", this.rocket.bind(this));
      this.el.addEventListener("mousedown", this.traveler.bind(this));
      document.addEventListener("mouseup", this.reverseTraveler.bind(this));
    }
  
    rocket(e) {
      e.stopPropagation();
      this.blocks.forEach(b => {
        b.style.order = (Number(b.style.order) + 1).toString();
      });
      this.el.style.order = 0;
    }
  
    traveler(e) {
      e.stopPropagation();
      clearInterval(this.myInterval);
      this.myInterval = setInterval(() => {
        if (this.el.style.left.split("px")[0] <= 900)
          this.el.style.left = `${Number(this.el.style.left.split("px")[0]) + 1}px`;
      }, 1);
    }
  
    reverseTraveler() {
      clearInterval(this.myInterval);
      this.myInterval = setInterval(() => {
        this.el.style.left === "0px"
          ? clearInterval(this.myInterval)
          : (this.el.style.left = `${Number(this.el.style.left.split("px")[0]) - 1}px`);        
      }, 1);
    }
  }
  
let blocks = document.querySelectorAll(".block")
let createBlocks = blocks.forEach((b, i) => (b = new Block(b, i)));





