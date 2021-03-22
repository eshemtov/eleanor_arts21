var audio = document.getElementById("music");
function playPause(){
	if (audio.paused) audio.play();
	else audio.pause();
}
