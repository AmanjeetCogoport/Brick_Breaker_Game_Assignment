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


