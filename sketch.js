var back, backImg1, backImg2;

var play, settings;

var song, slider;
var levelimg;

var rio;

var back1, level1, back2;

var Pg;

var T1, T2, T3;

var t1, t2, t3;

var playing = true;

function preload() {
  backImg1 = loadAnimation("RIO.jpg");

  levelimg = loadAnimation("level 1.jpg");

  song = loadSound("Recording (9).m4a");

  slider = createSlider(0, 1, 0.5, 0.02);

  rio = loadAnimation("rio2level.jpg");
}
function setup() {
  createCanvas(620, 360);

  back = createSprite(305, 181, 20, 50);
  back.scale = 0.5;
  back.addAnimation("background", backImg1);
  back.addAnimation("level", levelimg);
  back.addAnimation("rio1", rio);

  play = createSprite(305, 225, 70, 70);
  play.visible = false;

  settings = createSprite(595, 325, 40, 40);
  settings.visible = false;

  back1 = createSprite(15, 348, 60, 60); 
  back1.visible = false;

  back2 = createSprite(40, 305, 30, 30);
  back2.visible = false;

  pg = createSprite(65, 220, 110, 100);
  pg.visible = false;

  level1 = createSprite(170, 70, 60, 60);
  level1.visible = false;

  T1 = createSprite(520, 330, 40, 40);
  T1.visible = false;

  T2 = createSprite(520, 2000, 40, 40);
  T2.visible = false;

  T3 = createSprite(520, 2000, 40, 40);
  T3.visible = false;

  t1 = createVideo("vid.mp4");
  t1.size(620, 380);
  t1.volume(1);
  t1.hide();

  t2 = createVideo("vid1.mp4");
  t2.size(620, 380);
  t2.volume(1);
  t2.hide();

  t3 = createVideo("");
  t3.size(620, 380);
  t3.volume(1);
  t3.hide();

  song.loop();
}

function draw() {
  background("0");

  let img = t1.get();
  image(img, 0, 0);

  let img1 = t2.get();
  image(img1, 0, 0);

  song.setVolume(slider.value());

  if (mousePressedOver(play)) {
    back.changeAnimation("rio1", rio);
    back.scale = 0.8;
    play.visible = false;
    settings.visible = false;
  }

  if (mousePressedOver(back1)) {
    back.changeAnimation("background", backImg1);
    back.scale = 0.5;
  }

  if (mousePressedOver(pg)) {
    back.changeAnimation("level", levelimg);
    back.scale = 0.3;
  }

  if (mousePressedOver(level1)) {
    song.stop();
  }

  if (mousePressedOver(back2)) {
    back.changeAnimation("rio1", rio);
    back.scale = 0.8;
  }

  if (mousePressedOver(T1)) {
    song.stop();
    t1.show();
    t1.play();
    t2.hide();
    T1.x = 2000;
    T2.x = 520;
    T2.y = 295;
  }

  if (mousePressedOver(T2)) {
    song.stop();
    t2.show();
    t2.play();
    t1.hide();
    T2.x = 2000;
    T3.x = 520;
    T3.y = 330;
  }

 

  if (mousePressedOver(settings)) {
    t1.hide();
    song.play();
    t2.hide();
  }

  drawSprites();
}
