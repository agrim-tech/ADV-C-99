var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var confidence, transcript;

var synth, what_to_speak, utter;

var camera;

function start() {
    document.getElementById("result").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    confidence = event.results[0][0].confidence;
    transcript = event.results[0][0].transcript;
    console.log("Confidence -- " + confidence);
    console.log("You Spoke -- " + transcript);
    document.getElementById("result").innerHTML = transcript;
    if (transcript == "take my selfie") {
        speak();
    }
};
function speak() {
    synth = window.speechSynthesis;
    what_to_speak = "Taking Your Photo In 5 seconds";
    utter = new SpeechSynthesisUtterance(what_to_speak);
    synth.speak(utter);
    Webcam.attach(camera);
}

camera = document.getElementById("webcam");

Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});