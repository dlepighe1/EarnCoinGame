/* 
Earn Coin Game
--------------
Author: David Lepighe
*/

// Variables and stuff
var scene = 1; var timer = 0; var seconds = 0; var keys =[];
//Scene 0 = intro ; scene 1 = game ; scene 2 = Game over;

//Intro page
{var startx = 106;
var starty = 411;
var startw = 190;
var starth = 74;

var coiny = 305;
var coinshadow = 10;
var coinspeed =2;
var presscolor = color(299,99);
}
// Game page
{var circlex1 = random(20, 375);
var circlex2 = random(20, 375);
var circlex3 = random(20, 375);
var circlex4 = random(20, 375);
var specialcx = random(22, 375);

var circley1 = random(-10, -35);
var circley2 = random(-10, -35);
var circley3 = random(-10, -35);
var circley4 = random(-10, -35);
var specialcy = random(-10, -35);

var ballsize = 40;
var coin = 0;
var speed = 3;

var redc = 255;
var greenc = 255;}

mouseClicked = function() {
  if (scene === 1 && mouseX > startx && mouseX < (startx + startw),mouseY > starty && mouseY < (starty + starth)){
  scene = 2;
  }
  if (scene === 3 && mouseX >140&& mouseY>482&& mouseX <203 &&mouseY< 545){
      scene = 2;
      coin = 0;
  }
};

draw = function() {
    
    if (scene === 1){
        background(0, 10, 100);
        fill(245);
        textSize(58);
        fill(64, 59, 64);
        text("Earn Coin", 80, 77);
        fill(181, 142, 13);
        text("Earn Coin", 85,77);
        //Coin animation
        {fill(255, 204, 0);
        ellipse(200, coiny,100,100);
        fill(255, 242, 0);
        ellipse(200, coiny,80,80);
        fill(255, 234, 0);
        ellipse(200,coiny,20,70);
        
        coiny = coiny - coinspeed;
        if (coiny < 150){
            coinspeed = coinspeed*-1;
            
        }
        if(coiny > 305 && coinshadow){
            coinspeed = coinspeed *-1;
            
        }
        
        fill(50);
        noStroke();
        ellipse(200,363,coinshadow,10);
        coinshadow = coinshadow  -0.48*-coinspeed;}
        
        fill(presscolor);
        rect(startx, starty,startw, starth, 50);
        //fill(presscolor);
        //rect(startx, starty+ 90,startw, starth, 50);
        
        fill(0);
        textSize(30);
        text("Star game", 132,458);
        textSize(18);
        fill(170);
        text("V.0.1", 347, 589);
        }
        
    if (scene  === 2){
        background(redc, greenc, 255);
    // cursor 
    fill(0,0,245);
    ellipse(mouseX, mouseY,ballsize, ballsize);

    //Coins
    {noStroke();
    fill(255, 204, 0);
    ellipse(circlex1, circley1, 50, 50);
    fill(255, 242, 0);
    ellipse(circlex1, circley1, 40, 40);
    fill(255, 234, 0);
    ellipse(circlex1, circley1, 10, 35);
    // coins    
    fill(255, 204, 0);
    ellipse(circlex2, circley2, 50, 50);
    fill(255, 242, 0);
    ellipse(circlex2,circley2, 40, 40);
    fill(255, 234, 0);
    ellipse(circlex2, circley2, 10, 35);
    
    //coins
    fill(255, 204, 0);
    ellipse(circlex3, circley3, 50, 50);
    fill(255, 242, 0);
    ellipse(circlex3,circley3, 40, 40);
    fill(255, 234, 0);
    ellipse(circlex3, circley3, 10, 35);

    //coins
    fill(255, 204, 0);
    ellipse(circlex4, circley4, 50, 50);
    fill(255, 242, 0);
    ellipse(circlex4,circley4, 40, 40);
    fill(255, 234, 0);
    ellipse(circlex4, circley4, 10, 35);


    circley1 = circley1 + speed;
    circley2 = circley2 + speed;
    circley3 = circley3 + speed;
    circley4 = circley4 + speed;}
    
    // Gaining points
    {if (dist(mouseX,mouseY, circlex1, circley1)< 40/2 + ballsize/2){
        coin = coin + 1;
        circlex1 = random(20, 375);
        circley1 = random(-15, -35);
    }
    if (dist(mouseX,mouseY, circlex2, circley2)< 40/2 + ballsize/2){
        coin = coin + 1;
        circlex2 = random(20, 375);
        circley2 = random(-15, -35);
    }
    if (dist(mouseX,mouseY, circlex3, circley3)< 40/2 + ballsize/2){
        coin = coin + 1;
        circlex3 = random(20, 375);
        circley3 = random(-15, -35);
    }
    if (dist(mouseX,mouseY, circlex4, circley4)< 40/2 + ballsize/2){
        coin = coin + 1;
        circlex4 = random(20, 375);
        circley4= random(-15, -35);
    }}

// Special options  
    if (coin > 20){
        speed =6;
        fill(255, 0, 0);
        ellipse(specialcx, specialcy, 40, 40);
        fill(171, 5, 33);
        ellipse(specialcx, specialcy, 30, 30);
        specialcy = specialcy + speed;
        if (dist(mouseX, mouseY, specialcx, specialcy)< ballsize/2 + 40/2){
            ballsize = 80;
            specialcy = 640;
        }
        
    redc = redc - 5;
    
    }
    if (coin === 30){
        speed = 5;
        ballsize = 40;
    }
    
    if (circley1 > 600 || circley2 > 600 || circley3 > 600 || circley4 >600){
        scene = 3;
        
    }
    
    if (coin > 1){
        fill(0);
        textSize(15);
        text("Coins : " + coin, 20, 25);
    }else{
        fill(0);
        textSize(15);
        text("Coin : " + coin, 20, 25);
    }
    
    if (coin >55){
        redc = 245;
        greenc = 100;
    }
    }
    
    if (scene === 3){
        background(50);
        fill(255, 0, 0);
        textSize(72);
        text("Game Over", 12, 200);
        if (coin > 50){
            textSize(25);
            text("Nice work ! You earned "+ coin+".", 50, 243);
        }else{
            textSize(37);
            text("You can do better!\n   You have "+coin + " !", 50, 301);
        }
        
        timer = timer + 1;
        seconds = timer/60;
        if (seconds > 1){
            fill(133, 85, 3);
            stroke(0);
            strokeWeight(2);
            rect(140, 482, 121, 63, 20);
            fill(0);
            textSize(20);
            text("Try again", 159, 519);
        
            if (scene === 3 && mouseX >16 && mouseY >482 && mouseX < 252 && mouseY < 540 && mouseIsPressed){
    scene = 2;
    coin = 0;
  }
        circley1 = random(-10, -35);
        circley2 = random(-10, -35);
        circley3 = random(-10, -35);
        circley4 = random(-10, -35);
        specialcy = random(-10, -35);
        redc = 255;
        greenc = 255;
        ballsize = 40;
        speed = 3;
        }

    }
};
