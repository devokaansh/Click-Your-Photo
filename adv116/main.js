noseX=0;
noseY=0;

function preload() {}

function setup()
{
    canvas = createCanvas(360,300) ;
    canvas.position(600, 200) ;
    video = createCapture(VIDEO) ;
    video.hide() ;

    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on('pose' , gotResult) ;
}

function modelLoaded()
{
    console.log("Model is loaded..") ;
}

function gotResult(results)
{
    if(results.length > 0) {
        console.log(results) ;
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(noseX) ;
        console.log(noseY) ;
    }
}

function draw() {
    image(video, 0, 0, 360, 300);  }
function take_snapshot()
{
    save('myFilterPic') ;
}