var bird;
var pipes = [];

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true;

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());
  
    myRec.onResult = parseResult; // recognition callback
    myRec.start(); // start engine
}

function draw() {
	background(0);
	bird.show();
	bird.update();
	
	if(frameCount % 40 == 0){
		pipes.push(new Pipe());
	}
	
	for(var i = pipes.length - 1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();
		if(pipes[i].offscreen()){
			pipes.splice(i, 1);
		}
		if(pipes[i].hits(bird)){
			// console.log("hit");
		}
	}
}



function Bird(){
	this.y = height/2;
	this.x = 64;
	
	this.gravity = 0.6;
	this.lift = -15;
	this.velocity = 0;
	
	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	}
	
	this.up = function(){
		this.velocity += this.lift;
	}
	
	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;
		
		
		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}
		if(this.y < 0){
			this.y = 0;
			this.velocity = 0;
	}
}
}

function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		var mostrecentword = myRec.resultString.split(' ').pop();
		if(mostrecentword.indexOf("up")!==-1) { 
          bird.up();
        }
		console.log(mostrecentword);
	}
