/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var audio, playbtn;

function initAudioPlayer() {
    audio = new Audio();
    audio.src = "test.mp3";
    audio.loop = true;
    audio.play();
    // Set object references
    playbtn = document.getElementById("muziek");
    // Add Event Handling
    playbtn.addEventListener("click", playPause);
    // Functions
    function playPause() {
        if (audio.paused) {
            audio.play();
            document.getElementById("muziek").innerHTML = "pauze";
        } else {
            audio.pause();
            document.getElementById("muziek").innerHTML = "Verder spelen";

        }
    }

}
window.addEventListener("load", initAudioPlayer);

// https://www.developphp.com/video/JavaScript/Audio-Play-Pause-Mute-Buttons-Tutorial //


document.getElementById("buttonkop").onclick = function () {
    document.getElementById("buttonkop").innerHTML = "Sorry, het is uitverkocht";
};


document.getElementById("hartje").onclick = function () {
       var element = document.getElementById("hartje");
        element.classList.toggle("rood");
};


