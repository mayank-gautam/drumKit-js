var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrums;i++){
    // button press
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){      
        var currDrumNumber = this.innerHTML;
        playSound(currDrumNumber); 
        buttonAnimation(currDrumNumber);       
    });

    // keyPress
    document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){
        playSound(event.key);
        buttonAnimation(event.key);
    });
}

function playSound(keyLetter){
    switch(keyLetter){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
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
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
        break;

        case "k":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
        break;

        case "l":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
        break;
    }
}

function buttonAnimation(keyPress){
    let activeButton = document.querySelector("."+keyPress);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}