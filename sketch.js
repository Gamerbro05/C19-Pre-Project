var PLAY = 1
var END = 0
var gameState = PLAY

var rocket
var space
var obstacleGroup, obstacle1, obstacle2
var score


function preload(){
    rocket = loadImage("Rocket.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    rocket = createSprite(50, 160, 20, 20)
    rocket.addImage("Rocket", rocket)
 
}

function draw() {
 background(100)
 drawSprites()
}