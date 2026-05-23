const song = new Audio("song.mp3");

song.loop = true;
song.volume = 0.6;

function playMusic() {
    song.play();
}
