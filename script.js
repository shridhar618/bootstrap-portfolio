var userInput = propt("Please enter your name:");
alert("Hello, " + userInput + "! Welcome to my website...Explore everything.");


document.querySelector("button").addEventListner("click", function() {
    var audio=new Audio();
    audio.scr=".tom-4.mp3";
});

function playSound(audioName) {
    let audio=new Audio(audioName);
    audio.play();
}
playSound("tom-4.mp3");