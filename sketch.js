// ******** All Global Variable goes here *************

const [RIGHT, LEFT] = [1, -1];
const height_pad = 20;
const width_pad = 100;
let ball_diameter = 30;
const startPosBallX = 800 / 2;
const startPosBallY = 600 - 25;
const col = ["#E22D2D", "#FAA300", "#9BC53D"];
const clr = ["green", "yellow", "red", "pink", "violet"];
let liveClr = ["violet", "Red", "yellow", "green", "blue"];


let pad; // for paddle
let ball; // for ball
let briks = []; // for storing the instance of briks
let direction = "";
let score = 0,
  live = 4;
let possx = 450,
  possy = 40;
let outloop = 20;
let win = 0;




// added score and live functionality.
// show scores and live
function show_score() {
    fill("Blue");
    textSize(30);
    text("Score : " + score, possx, possy);
    fill(liveClr[live - 1]);
    text("Live : " + (live - 1), possx + 180, possy);
  }
  
  // calculate score
  function calculate_score(increaseValue) {
    score += increaseValue;
    show_score();
  }
  
  // decrease life
  // function decrease life
  function decrease_life() {
    live--;
    show_score();
    if (live == 0) {
      // stop the game here only.
      noLoop();
      alert("You Win the Game!");
    }
  }
  
  // will create random color in rgb.
  function random_color() {
    color = `rgb(${parseInt(Math.random() * 254) + 1}, ${
      parseInt(Math.random() * 254) + 1
    }, ${parseInt(Math.random() * 254) + 1})`;
    return color;
  }
  
  // will create random number beetween 2 given number.
  function random_num(x, y) {
    let number = parseInt(x + Math.random() * (y - x));
    return number;
  }





// ********* creating classes for all the objects that this game has one by one :*******

// creating Pad class
class Pad {
    constructor(posX, posY) {
      this.l = width_pad;
      this.h = height_pad;
      this.y = posY;
      this.x = posX - width_pad / 2;
      this.speed = 5.5;
    }
  
    show() {
      if (this.x <= 0) {
        this.x = 0;
      }
  
      if (this.x + this.l >= width) {
        this.x = width - this.l;
      }
  
      fill(random_color());
      rect(this.x, this.y, this.l, this.h, 10);
    }
  
    move(dir) {
      this.x += dir * this.speed;
    }
  }

  