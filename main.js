
function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
     objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
     document.getElementById("status").innerHTML = "Status : detecting object";
     input = document.getElementById("object_name").ariaValueMax;
 }

 function modelLoaded(){
     console.log("Model loaded");
     status = true;
 }

 function draw(){}
    image(video , 0, 0,600 , 500);
}
