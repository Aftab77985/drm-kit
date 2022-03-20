var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    var button = document.querySelectorAll(".drum")[i];
    button.addEventListener("click", function () {
        
        var buttonContent = this.innerHTML;
        switchControl(buttonContent);
        getAnimation(buttonContent);
    });
}
document.addEventListener("keydown", function (e) {
    switchControl(e.key);
    getAnimation(e.key);
});

function switchControl(char) {
    switch (char) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.preload();
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(buttonContent);
            break;
    }
}
function getAnimation(key) {
    var selectedButton = document.querySelector("." + key);
    selectedButton.classList.add("pressed");

    setTimeout(() => {
        selectedButton.classList.remove("pressed");
    }, 100);

}
