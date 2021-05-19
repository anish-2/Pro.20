var background,backgroundImg;
var tom1,tom1Img,tom2,tom2Img,tom3,tom3Img,tom4,tom4Img;
var rat1,rat1Img,rat2,rat2Img,rat3,rat3Img,rat4,rat4Img;

function preload(){
    backgroundImg = loadImage("images/garden.png");

    tom1Img = loadImage("images/cat1.png");
    tom2Img = loadImage("images/cat2.png","images/cat3.png");
    tom3Img = loadImage("images/cat4.png");

    rat1Img = loadImage("images/mouse1.png");
    rat2Img = loadImage("images/mouse2.png","images/mouse3.png");
    rat3Img = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping",tom1Img);
    tom.scale = 0.2;

    rat = createSprite(200,600);
    rat.addAnimation("ratStandingImg",rat1Img);
    rat.scale = 0.15;
}

function draw(){
    background(backgroundImg);

    if(tom.x - rat.x < (tom.width - rat.width)/2){
        tom.veloctiyX = 0;
        tom.addAnimation("tomLastImage",tom3Img);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImage");
        rat.addAnimation("ratLastImage",rat3Img);
        rat.scale = 0.15;
        rat.changeAnimation("ratLastImage");
    }
    drawSprites();
}

function keyPressed(){
    if (keyCode ===LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",tom2Img);
        tom.changeAnimation("tomRunning");

        rat.addAnimation("ratTeasing",rat2Img);
        rat.frameDelay = 25;
        rat.changeAnimation("ratTeasing");
    }
}