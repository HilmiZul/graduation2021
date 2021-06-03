/*
 * sketch.js
 * Graduation / Kelulusan SMK Negeri 4 Tasikmalaya
 * 
 * Zul Hilmi
 * https://github.com/hilmizul/graduation
 * 31 Mei 2021
 */

let drops = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  for (let i = 0; i < 50; i++) {
    drops[i] = new Drop(Math.floor(random(5)));
  }
}

function draw() {
  background(255);

  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    if (drops[i].pos.y > height) {
      drops.splice(i, 1);
    }
  }
}