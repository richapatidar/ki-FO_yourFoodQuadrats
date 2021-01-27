var w = window.innerWidth;
var h = window.innerHeight;
let table;
let img;

// function preload() {
//   table = loadTable("Food DC.csv", "csv", "header");

// //img = loadImage('logo f.png');
// }


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(w, h);
   background(230);
  


img = createImg('start logo.png', 'start logo.png');
  img.position(w * 0.44, h/2.3);
  img.style("width", "200px");
  //img.style("background-color", "#E6E6E6");

image(img,0,0);

  
var button = createImg('arrow.png');
  button.mousePressed(introPage);
  button.position(w * 0.485, 650);
  button.style("color", "black");
  //button.style("background-color", "white");
  button.style("width", "20px");
  button.style("font-family", "Helvetica");
  button.style("font-size", "0.8rem");
}

function draw() {
  background(230);

  // img.style("background-color", "#E6E6E6");
  // img.style("height", "600px");
}


function keyTyped() {
  if (key == 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  } else {
    !fullscreen(!fs);
  }
}


function mousePressed() {

}


function introPage() {
  // creA('https://richapatidar.github.io/kifo_1/', 'this is a link');
  //location.href = 'https://richapatidar.github.io/kifo_1/';
}
