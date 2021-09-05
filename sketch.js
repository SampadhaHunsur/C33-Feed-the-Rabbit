var bunny, bunnyImg;
var bubble, bubbleImg;
var cutButton, cutButtonImg;
var melon, melonImg;

function preload(){
  bunnyImg = loadImage("bunny.png")
  bubbleImg = loadImage("bubble.png")
  //cutButtonImg = loadImage("cut button.png")
  melonImg = loadImage("melon.png") 
}

function setup() {
  createCanvas(800,400);
  bunny = createSprite(400, 200, 50, 50);
  bunny.addImage(bunnyImg);
  bunny.scale = 0.2

  button = createImg('cut_btn.png');
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked(drop);

  fruit_con = new Link(rope,fruit);
  ground = new Ground(600,50,600,20);
}

function draw() {
  background(255,255,255);  

  if(collide(fruit,bunny,80)==true){
    remove_rope();
    bubble.visible = false;
    World.remove(engine.world, fruit);
    fruit = null;
  }
  drawSprites();
}

function drop()
{
  cut_sound.play();
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
} 

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,fruit);
               fruit = null;
               return true; 
            }
            else{
              return false;
            }
         }
}