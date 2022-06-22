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
    object_to_find=document.getElementById("object_to_find")
}

function modelLoaded(){
    console.log("model is loaded");
    statuss=true;
}


function gotResult(error,results){
    if(error){
        console.error(error);
     
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(video,0,0,380,380);


  if(statuss != ""){
    document.getElementById("status").innerHTML="Status: Objects Dectected";
    for(i=0; i<objects.length; i++){
    fill("red");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label + " "+ percent + "%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("blue");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }

}

if(objects[i].label == object_to_find){
video.stop();
objectDetector.detect(gotResult);
document.getElementById("objectdetected").innerHTML=object_to_find+"found";
synth = window.speechSynthesis;
speakdata = object+"Mentioned Found";
var utterThis= new SpeechSynthesisUtterance(speakdata);
synth.speak(utterThis);
}
else{
    document.getElementById("objectdetected").innerHTML=object_to_find+" not found";   
}
}