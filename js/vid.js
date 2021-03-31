var vidz = document.getElementById('vid');

let vid = () => {
    if (vidz.paused) {
        vidz.play()
        vidb.innerHTML = "pause";
    } else {
        vidz.pause()
        vidb.innerHTML = "paused";
    }
    // uwu
    // vidz.paused ? vidz.play() : vidz.pause();
}

let mute = () => {
    if (vidz.muted) {
        vidz.muted = false
        mutez.innerHTML = "mute";
    } else {
        vidz.muted = true
        mutez.innerHTML = "muted"
    }
    // gajadi pake ini
    // vidz.muted ? vidz.muted = false : vidz.muted = true;
}