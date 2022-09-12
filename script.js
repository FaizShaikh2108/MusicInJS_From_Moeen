var numberOfDrumButtom = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtom; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click',
        function () { //anonymous function
            console.log(this);
            var buttonInnerHTML = this.innerHTML;
            console.log(buttonInnerHTML);
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML)
        }
    )
    console.log("Index of Button:" + i);
}

document.addEventListener('keypress',
     function (event){
          console.log(event);
          console.log(event.key);
          makeSound(event.key);
          buttonAnimation(event.key);
     }
);

function makeSound(key) {
    switch (key) {
        case 's':
            var musicObject = new Audio('assets/Musics/tom-1.mp3');
            musicObject.play();
            break;
        case 'r':
            var musicObject = new Audio('assets/Musics/tom-2.mp3');
            musicObject.play();
            break;
        case 'g':
            var musicObject = new Audio('assets/Musics/tom-3.mp3');
            musicObject.play();
            break;
        case 'm':
            var musicObject = new Audio('assets/Musics/tom-4.mp3');
            musicObject.play();
            break;
        case 'p':
            var musicObject = new Audio('assets/Musics/snare.mp3');
            musicObject.play();
            break;
        case 'd':
            var musicObject = new Audio('assets/Musics/crash.mp3');
            musicObject.play();
            break;
        case 'n':
            var musicObject = new Audio('assets/Musics/kick-bass.mp3');
            musicObject.play();
            break;

    }
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}