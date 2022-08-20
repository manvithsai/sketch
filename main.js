function setup(){
canvas=createCanvas(280,280);
canvas.center();
background("cyan");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}
function clearcanvas(){
background("white");
}
function draw(){
strokeWeight(15);
stroke("cyan");
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function classifyCanvas(){
    classifier.classify(canvas,gotresult);
}
function gotresult(error,results){
if(error){
console.log(error);
}
console.log(results);
document.getElementById("label").innerHTML="label:"+results[0].label;
document.getElementById("confidence").innerHTML="confidence"+Math.round(results[0].confidence*100)+"%";
utterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}