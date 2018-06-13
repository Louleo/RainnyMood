var this_sound_file;
var images = [];
var bg;
var x;
var r;
var y;
var tops,bot,left,right;
var addORsub,sp,sz;
var ad;
function preload(){
  var sound_file_choices = [];
  for (var i = 1; i <= 10; i++) {
    sound_file_choices.push(i);
  }
  for (var i = 1; i <= 9; i++) {
    images.push(i);
  }
  var choice = random(sound_file_choices);
  this_sound_file = choice.toString();
  rainSound = loadSound('mp3s/'+this_sound_file+'.mp3');
}

function setup(){
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  ad = document.getElementById("advertise");
  console.log(windowWidth/20);
  ad.style.fontSize = (windowWidth/21).toString();
  x = windowWidth/2;
  y = windowHeight/4;
  r = 0;
  addORsub = true;
  sp = true;
  sz = false;
  tops = 0;
  bot = windowHeight-(windowWidth/18);
  left = 0;
  right = 3*windowWidth/5;
  var choice = random(images);
  var image = document.getElementById('background');
  image.width = windowWidth;
  image.height= windowHeight;
  image.onload = function () {
    var engine = new RainyDay({
      image: this,
      fps : 10
    });
    engine.rain([
						[0, 1, 1.5],
						[1, 3, 1]
					]);
  };
  image.crossOrigin = 'anonymous';
  image.src = 'imgs/'+choice.toString()+'.jpg';
  rainSound.loop();
}

function draw(){
  if (addORsub) {
    r = r+1;
  }else {
    r = r-1;
  }
  if (r>255) {
    r = 254;
    addORsub = false;
  }else if (r<0) {
    r = 1;
    addORsub = true;
  }
  ad.style.color = "rgb("+r.toString()+",255,255)";
  if (sp) {
    x = x+windowWidth/300;
  }else {
    x = x-windowWidth/300;
  }
  if (x>right) {
    x = right;
    sp = false;
  }else if(x<left) {
    x = left;
    sp = true;
  }

  if (sz) {
    y = y + windowHeight/400;
  }else {
    y = y - windowHeight/400;
  }

  if (y>bot) {
    y = bot;
    sz = false;
  }
  if(y<tops) {
    y = tops;
    sz = true;
  }
  ad.style.left = x.toString();
  ad.style.top = y.toString();
}

// image(images[0],-10,-10,windowWidth+10,windowHeight+10);

//
// stroke(r,150,90);
// fill(r,150,90);
// textAlign(CENTER);
// textSize(windowWidth/20);

// ad(x,y,"澳洲代购 就找齐霁")

function ad(x,y,txt){
  text(txt, x, y);
}
