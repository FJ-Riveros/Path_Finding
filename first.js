var cols = 5;
var rows = 5;
var grid = new Array(rows);
let openSet = [];
let closedSet = [];
let start, end;
let w, h;
function Spot(i, j) {
  this.x = j;
  this.y = i;
  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.show = (color) => {
    fill(color);
    noStroke();
    rect(this.x * w, this.y * h, w - 1, h - 1);
  };
}
function setup() {
  createCanvas(400, 400);
  w = width / cols;
  h = height / rows;
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  start = grid[0][0];
  end = grid[rows - 1][cols - 1];
  openSet.push(start);
  console.log(grid);
}
function draw() {
  if (openSet.length > 0) {
  } else {
  }
  background(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].show(255);
    }
  }

  for (let i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0));
  }

  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(0, 255, 0));
  }
}
