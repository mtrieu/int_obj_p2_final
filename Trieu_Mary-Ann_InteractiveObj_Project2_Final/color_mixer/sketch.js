var myRec = new p5.SpeechRec(); 
	myRec.continuous = true;
	myRec.interimResults = true;
var R, G, B;
	function setup()
	{
		// graphics stuff:
		createCanvas(500, 500);
		background(255, 255, 255);
		fill(0, 0, 0, 255);
      R = 0;
      G = 0;
      B = 0;
		myRec.onResult = parseResult; // recognition callback
		myRec.start(); // start engine
	}

	function draw()
	{
            clear();
      fill(255);
      strokeWeight(4);
      stroke(51);
	  rect(0,400, 500, 100);
      
      fill (0);
      noStroke();
      textSize(32);
      text(R + "," + G + "," + B, 0, 400, 500, 100);
      textAlign(CENTER, CENTER);

      
      fill(R,G,B);
      noStroke();
	  rect(0,0, 500, 400);
      


	}
	function parseResult()
	{
		var mostrecentword = myRec.resultString.split(' ').pop();
		if(mostrecentword.indexOf("red")!==-1) { R = R + 10; }
		else if(mostrecentword.indexOf("green")!==-1) { G = G + 10; }
		else if(mostrecentword.indexOf("blue")!==-1) { B = B + 10; }
		else if(mostrecentword.indexOf("black")!==-1) { R = 0; G = 0; B = 0; }
      else if(mostrecentword.indexOf("white")!==-1) { R = 255; G = 255; B = 255; }
		console.log(mostrecentword);
	}