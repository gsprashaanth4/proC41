var database;

var gameState =0;
var playerCount = 0;
var allPlayers;

var player;
var form;
var game;

var player1;
var player2;
var players;

var germs;
var germGroup;

var germ1;
var germ2;
var germ3;

var bgImg;

var playerImg;

function preload()
{
  germ1 = loadImage("../virImg1.png");
  germ2 = loadImage("../virImg2.png");
  germ3 = loadImage("../virImg3.png");
  playerImg = loadImage("../injection11.png");
  bgImg = loadImage("../blurHospitalImg1.jpg");

  germGroup = new Group();
}

function setup() 
{
  createCanvas(1000, 500);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() 
{

  background("yellow");
  
   if (playerCount === 2) 
   {
     game.update(1);
   }

   if (gameState === 1) 
   {
     clear(); 
     game.play();
   }

   if (gameState === 2) 
   {
     game.end();
   }

}