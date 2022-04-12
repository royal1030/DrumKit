// Detecting button press

let numberofDrumButtons = document.getElementsByClassName("btn").length;
for (let index = 0; index < numberofDrumButtons; index++) {

    document.getElementsByClassName("btn")[index].addEventListener("click", function() {
        // console.log(" 1st key pressed");
        // this.style.color="white";
        // console.log(this.innerHTML);
        let buttoninnnerhtml = this.innerHTML;
        makesound(buttoninnnerhtml);
        buttonAnimation(buttoninnnerhtml);
    });
}
// Detecting keyboard press..

document.addEventListener("keypress", function(event) {
    //  console.log(event);  THIS WILL GIVE ALL THE INFORMATION OF WHICH KEY IS PRESSED . i.e. key(keyname which key is pressed like e,f etc) and ALL INFORMATION OF THAT..

    makesound(event.key);
    buttonAnimation(event.key);

});

function makesound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }

}

function buttonAnimation(currkey) {
    document.querySelector("." + currkey).classList.add("pressed"); // from this we can add the class and if we want to check how many classes present in any tag then we simply use document.querySelector(tag).classList....

    // but FROM ABOVE STMT WHEN WE CLICK IT SHOWS WHICH BUTTON IS CLICKED BUT NOT RESTORE AS PREVIOUS...
    // SO , FOR THAT WE USE SETTIMEOUT..
    setTimeout(function() {
        document.querySelector("." + currkey).classList.remove("pressed");
    }, 200);


}