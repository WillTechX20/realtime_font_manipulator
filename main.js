var canvas=null;
var video=null;
var poseNet=null;
var leftWristXNum=null;
var rightWristXNum=null;
var i=null;
var textFontSizeDiv=document.querySelector('.text_font_size');

function preload(){
}

function onModelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results){
    if(results.length>0){
        leftWristXNum=results[0].pose.leftWrist.x;
        rightWristXNum=results[0].pose.rightWrist.x;
        i=floor(leftWristXNum-rightWristXNum);
        textSize(i);
        textFontSizeDiv.innerText='Font Size: '+i;
    }
}

function setup(){
    video=createCapture(VIDEO);
    video.size(300, 300);
    canvas=createCanvas(300, 300);
    canvas.position(480, 400);
    poseNet=ml5.poseNet(video, onModelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    textSize(10);
    fill('blue');
    text('Will', 100, 100);
}