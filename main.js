statuss="";


function setup(){
    canvas=createCanvas(400,380);
    canvas.center();
    video=createCapture(VIDEO);
   video.size(380,380);
   video.hide();

}


function start(){
    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    object=document.getElementById("object_to_find")
}

function modelLoaded(){
    console.log("model is loaded");
    statuss=true;
}

function draw(){
    image(video,0,0,380,380)
}