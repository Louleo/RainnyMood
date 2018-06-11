var this_sound_file;
var images = [];
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
  var image = document.getElementById('background');
  image.width = windowWidth;
  image.height= windowHeight;
  image.onload = function () {
    var engine = new RainyDay({
      image: this,
      fps : 36
    });
    engine.rain([
						[0, 2, 200],
						[3, 5, 10]
					], 100);
  };
  image.crossOrigin = 'anonymous';
  var choice = random(images);
  image.src = 'imgs/'+choice.toString()+'.jpg';
  rainSound.loop();
}

function draw(){
  // image(images[0],-10,-10,windowWidth+10,windowHeight+10);

}
