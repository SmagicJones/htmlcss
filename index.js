function playSound(){
    const crash = new Audio('crash.mp3');
    crash.play();
}

document.querySelector(".go").addEventListener("click", function (){
    playSound();
})