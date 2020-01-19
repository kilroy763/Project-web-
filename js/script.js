/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var audio, playbtn;

function initAudioPlayer() {
    audio = new Audio();
    audio.src = "test.mp3";
    audio.loop = true;
    audio.play();
    
    playbtn = document.getElementById("muziek");
    
    playbtn.addEventListener("click", playPause);
    
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
    document.getElementById("hartje").classList.toggle("rood");
};

//bron daisy samengewerkt ja//


document.getElementById("start").onclick = function on() {
    document.getElementById("menu-overlay").style.display = "block";
    console.log("werkt");
};

document.getElementById("menu-overlay").onclick = function off() {
    document.getElementById("menu-overlay").style.display = "none";
};
