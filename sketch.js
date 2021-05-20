var background,backgroundImg;
var cat1,cat1Img,cat2,cat2Img,cat3,cat3Img,cat4,cat4Img;
var rat1,rat1Img,rat2,rat2Img,rat3,rat3Img,rat4,rat4Img;

function preload(){
    backgroundImg = loadImage("images/garden.png");

    cat1Img = loadImage("images/cat1.png");
    cat2Img = loadImage("images/cat2.png","images/cat3.png");
    tom3Img = loadImage("images/cat4.png");

    cat1Img = loadImage("images/mouse1.png");
    cat2Img = loadImage("images/mouse2.png","images/mouse3.png");
    cat3Img = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",cat1Img);
    cat.scale = 0.2;

    rat = createSprite(200,600);
    rat.addAnimation("ratStandingImg",rat1Img);
    rat.scale = 0.15;
}

function draw(){
    background(backgroundImg);

    if(cat.x - rat.x < (cat.width - rat.width)/2){
        cat.veloctiyX = 0;
        cat.addAnimation("catLastImage",cat3Img);
        cat.x = 300;
        cat.scale = 0.2;
        cat.ChangeAnimation("catLastImage");
        cat.addAnimation("ratLastImage",rat3Img);
        rat.scale = 0.15;
        rat.changeAnimation("ratLastImage");
    }
    drawSprites();
}

function keyPressed(){
    if (keyCode ===LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",cat2Img);
        cat.changeAnimation("tomRunning");

        rat.addAnimation("ratTeasing",rat2Img);
        rat.frameDelay = 25;
        rat.changeAnimation("ratTeasing");
    }
}
