
nose_x = 0;
nose_y = 0;
leftwrist_x = 0;
rightwrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);


    canvas = createCanvas(600,450);
    canvas.position(700,130);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    background("#a8c1fb");
    fill("#d9051b");
    stroke("#18d4e4");

    square(nose_x,nose_y,difference);
    document.getElementById("box").innerHTML = "Width And Height Of The Square Is "+difference;



}

function modelLoaded(){
    console.log("model loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose_x = "+nose_x+" nose_y = "+ nose_y);

        leftwrist_x = results[0].pose.leftWrist.x;
        rightwrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftwrist_x - rightwrist_x);
        
        console.log("left wrist = "+leftwrist_x+" right wrist = "+rightwrist_x+" difference = "+difference);
    }

}









