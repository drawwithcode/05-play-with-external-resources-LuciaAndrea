var myImage;
var portableSx;
var portableDx;
var mySong;
var analyzer

function preload() {
  myImage = loadImage("./asset/40406073931_960a32bc5c_b.jpg");
  portableSx = loadImage("./asset/prova2.png");
  portableDx = loadImage("./asset/prova3.png");
  mySong = loadSound("./asset/ok.mp3");


}

function setup() {

  createCanvas(windowWidth, windowHeight);
  mySong.loop();

  // …
analyzer = new p5.Amplitude();
analyzer.setInput(mySong);

}

function draw() {

  // variable containing the loaded image, x, y, [width, height]
volume = analyzer.getLevel();
volume = map(volume,0,1,0,height)

  image(myImage, 0, 0, windowWidth, windowHeight);
  image(portableSx, windowWidth/10*0.5, 10, volume*1.2, volume*1.2);
  image(portableDx, windowWidth/10*8.5, 10, volume*1.2, volume*1.2);



var myText = 'Moonrise Kingdom';
textFont('Tangerine');
textAlign(CENTER);
textSize(110);
fill('yellow');
text(myText, windowWidth/2, windowHeight/8 * 7);



/*var myText = 'Click to change song';
textFont('Arial');
textAlign(CENTER);
textSize(5);
fill('yellow');
text(myText, windowWidth/2, windowHeight/10*3);
}*/
}
