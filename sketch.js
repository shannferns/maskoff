// Add some header info
// For TM template code

// Video
let video;
let label = 'waiting...';
let confidence = 'waiting...'

let modelURL = 'https://teachablemachine.withgoogle.com/models/E8w0qtEY-/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
classifyVideo();
}

// STEP 2 classify!
function classifyVideo() {
  classifier.classify(video, gotResults
  );
}



// STEP 3: Get the classification!
function gotResults(error, results) {
if (error) {
  console.error(error);
  return
}  
  label = results[0].label;
  confidence = (`Confidence: ${nf(results[0].confidence, 0, 2)}`);
  classifyVideo();
  // console.log(results[0].label.dispose())

}
  
  function draw() {
  background(0);
  
  
  // Draw the video
  image(video, 0, 0, 680, 520);

    
    
   fill(255, 204, 0)
  rect(19, 23, 270, 50, 80);
    
    
  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER,CENTER);
  text(label, width/2, height - 16);
  fill(204, 102, 0);
  

// STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER,CENTER);
  text(confidence, 150, 50);
  fill(204, 102, 0);


  
}
