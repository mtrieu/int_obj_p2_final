var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true; // allow partial recognition (faster, less accurate)
var R, G, B;
	function setup()
	{
		// graphics stuff:
		createCanvas(windowWidth, windowHeight);
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
      fill(R,G,B);
		ellipse(windowWidth/2, windowHeight/2, 100, 100);

	}
	function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		var mostrecentword = myRec.resultString.split(' ').pop();
		if(mostrecentword.indexOf("red")!==-1) { R = 255; }
		else if(mostrecentword.indexOf("green")!==-1) { G = 255; }
		else if(mostrecentword.indexOf("blue")!==-1) { B = 255; }
		else if(mostrecentword.indexOf("black")!==-1) { R = 0; G = 0; B = 0; }
      else if(mostrecentword.indexOf("white")!==-1) { R = 255; G = 255; B = 255; }
		console.log(mostrecentword);
	}