// Your code goes here
const navItems = document.querySelectorAll("nav a");
function rando() {
  for (i=0; i<navItems.length; i++) {
    let rand = Math.random() + 1;
    navItems[i].style.transform = `scale(${rand})`;
  }
}
window.addEventListener("scroll", rando);

const topPic = document.querySelector(".intro img");
function fade() {
    topPic.style.opacity = '.7';
};
function fadeOut() {
    topPic.style.opacity = '';
};
topPic.addEventListener("mouseover", fade);
topPic.addEventListener("mouseout", fadeOut);

const destPic = document.querySelector(".content-destination img");
function changePic() {
    let rand = Math.floor((Math.random() * 5) + 1);
    destPic.src = `img/destination${rand}.jpg`;
};
destPic.addEventListener("click", changePic);

const title = document.querySelector(".logo-heading");
document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (title.innerText === "Fun Bus") {
        if (keyName == 'a' || keyName == 'A') {
            title.innerText += " to Atlanta";
        } else if (keyName == 'b' || keyName == 'B') {
            title.innerText += " to Boston";
        } else if (keyName == 'c' || keyName == 'C') {
            title.innerText += " to Chicago";
        } else if (keyName == 'd' || keyName == 'D') {
            title.innerText += " to Detroit";
        } else if (keyName == 'e' || keyName == 'E') {
            title.innerText += " to Eugene";
        } else if (keyName == 'f' || keyName == 'F') {
            title.innerText += " to Fairbanks";
        } else if (keyName == 'g' || keyName == 'G') {
            title.innerText += " to Grand Rapids";
        } else if (keyName == 'h' || keyName == 'H') {
            title.innerText += " to Houston";
        } else if (keyName == 'i' || keyName == 'I') {
            title.innerText += " to Ithaca";
        } else if (keyName == 'j' || keyName == 'J') {
            title.innerText += " to Jersey City";
        } else if (keyName == 'k' || keyName == 'K') {
            title.innerText += " to Kalamazoo";
        } else if (keyName == 'l' || keyName == 'L') {
            title.innerText += " to Los Angeles";
        } else if (keyName == 'm' || keyName == 'M') {
            title.innerText += " to Memphis";
        } else if (keyName == 'n' || keyName == 'N') {
            title.innerText += " to New York";
        } else if (keyName == 'o' || keyName == 'O') {
            title.innerText += " to Orlando";
        } else if (keyName == 'p' || keyName == 'P') {
            title.innerText += " to Portland";
        } else if (keyName == 'q' || keyName == 'Q') {
            title.innerText += " to Queens";
        } else if (keyName == 'r' || keyName == 'R') {
            title.innerText += " to Raleigh";
        } else if (keyName == 's' || keyName == 'S') {
            title.innerText += " to Seattle";
        } else if (keyName == 't' || keyName == 'T') {
            title.innerText += " to Tampa";
        } else if (keyName == 'u' || keyName == 'U') {
            title.innerText += " to Utica";
        } else if (keyName == 'v' || keyName == 'V') {
            title.innerText += " to Valley Forge";
        } else if (keyName == 'w' || keyName == 'W') {
            title.innerText += " to Witchita";
        } else if (keyName == 'x' || keyName == 'X') {
                title.innerText += " to Xenia";
        } else if (keyName == 'y' || keyName == 'Y') {
                title.innerText += " to Ypsilanti";
        } else if (keyName == 'z' || keyName == 'Z') {
            title.innerText += " to Zebulon";
        }
    }
  });
  function clearTitle(){
      title.innerText = 'Fun Bus';
  };
  document.addEventListener("keyup", clearTitle);

  const destBox = document.querySelectorAll(".content-pick .destination");
  const destBtn = document.querySelectorAll(".btn");
  const sun = destBox[0];
  const mount = destBox[1];
  const island = destBox[2];
  const sunBtn = destBtn[0];
  const mountBtn = destBtn[1];
  const islandBtn = destBtn[2];

  function greyOut0() {
      sunBtn.innerText = 'Sunshine!';
      sun.style.backgroundColor = "";
      sun.style.opacity = "";
      mountBtn.innerText = 'Sign Me Up!';
      mount.style.backgroundColor = "lightgrey";
      mount.style.opacity = ".6";
      islandBtn.innerText = 'Sign Me Up!';
      island.style.backgroundColor = "lightgrey";
      island.style.opacity = ".6";
  }

  function greyOut1() {
    sunBtn.innerText = 'Sign Me Up!';
    sun.style.backgroundColor = "lightgrey";
    sun.style.opacity = ".6";
    mountBtn.innerText = '*Yodeling*';
    mount.style.backgroundColor = "";
    mount.style.opacity = "";
    islandBtn.innerText = 'Sign Me Up!';
    island.style.backgroundColor = "lightgrey";
    island.style.opacity = ".6";
}

function greyOut2() {
    sunBtn.innerText = 'Sign Me Up!';
    sun.style.backgroundColor = "lightgrey";
    sun.style.opacity = ".6";
    mountBtn.innerText = 'Sign Me Up!';
    mount.style.backgroundColor = "lightgrey";
    mount.style.opacity = ".6";
    islandBtn.innerText = 'Yah Mon!';
    island.style.backgroundColor = "";
    island.style.opacity = "";
}

function greyNone() {
    sunBtn.innerText = 'Sign Me Up!';
    sun.style.backgroundColor = "";
    sun.style.opacity = "";
    mountBtn.innerText = 'Sign Me Up!';
    mount.style.backgroundColor = "";
    mount.style.opacity = "";
    islandBtn.innerText = 'Sign Me Up!';
    island.style.backgroundColor = "";
    island.style.opacity = "";
}


sunBtn.addEventListener("click", greyOut0);
mountBtn.addEventListener("click", greyOut1);
islandBtn.addEventListener("click", greyOut2);
document.addEventListener("dblclick", greyNone);