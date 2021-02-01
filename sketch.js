var canvas;
var music;

function preload()
{
    music = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(530,500);

    surface1 = createSprite(60,470,100,20);
    surface1.shapeColor = rgb(220, 20, 117);
    surface2 = createSprite(190,470,100,20);
    surface2.shapeColor = rgb(246, 206, 3);
    surface3 = createSprite(320,470,100,20);
    surface3.shapeColor = rgb(99, 247, 0);
    surface4 = createSprite(450,470,100,20);
    surface4.shapeColor = "cyan"

    block1 = createSprite(285,-5,1000,10);
    block2 = createSprite(285,505,1000,10);
    block3 = createSprite(-5,250,10,1000);
    block4 = createSprite(535,250,10,1000);

    ball = createSprite(random(20,490));
    ball.width = 20;
    ball.height = 20;
    ball.shapeColor = "white";
    ball.velocityY = 7;
    ball.velocityX = 5;
}

function draw() 
{
    background(rgb(0,0,0));
    
    createEdgeSprites();

    if(ball.isTouching(surface1))
    {
        ball.shapeColor = rgb(220, 20, 117);
        music.play();
        ball.bounceOff(surface1);
    }

    if(surface2.isTouching(ball))
    {
        ball.shapeColor = rgb(246, 206, 3);
        music.stop();
        ball.bounceOff(surface2);
    }

    if(surface3.isTouching(ball))
    {
        ball.shapeColor = rgb(99, 247, 0);
        music.stop();
        ball.bounceOff(surface3);
    }

    if(surface4.isTouching(ball))
    {
        ball.shapeColor = "cyan";
        music.stop();
        ball.bounceOff(surface4);
    }

    if(block1.isTouching(ball))
    {
        ball.shapeColor = "white";
    }

    if(block2.isTouching(ball))
    {
        ball.shapeColor = "white";
    }

    if(block3.isTouching(ball))
    {
        ball.shapeColor = "white";
    }

    if(block4.isTouching(ball))
    {
        ball.shapeColor = "white";
    }

    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);

    drawSprites();
}
