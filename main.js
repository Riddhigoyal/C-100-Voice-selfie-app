var SpeechRecognition= window.webkitSpeechRecognition;

recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log (event);
    var content= event.results[0][0].transcript;
    console.log (content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log ("Take My Selfie");
        speak();
    }
    
}

function speak(){
    var synth= window.speechSynthesis;
    speakdata="Taking your Selfie in 5 seconds";
    utterthis= new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis); 
    Webcam.attach(camera);
    setTimeout(function() {
     takeSnapshot();
        save(); 
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpg',
    jpg_quality: 90
});

camera=document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_image").src;
    link.href=img;
    link.click();
}