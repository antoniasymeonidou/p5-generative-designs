let txt;

function preload () {
  txt = loadStrings('poem.txt');
}

function setup () {
  createCanvas(600, 600);
}

function draw () {
  background('black');
  textSize(20);
  for (let i = 0; i < txt.length; i++) {
    fill(100+(i*10));
    text(txt[i], 150, 80 + i*30); // space between lines
  }
}
