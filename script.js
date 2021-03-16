//Variables
const audio = document.querySelector('audio');
audio.volume = 0.2;

//Music Informations

//Keyboard Functions
document.addEventListener('keyup',function(){
	if(event.keyCode==38){
		audio.volume += 0.1;
	}
})		
document.addEventListener('keyup',function(){
	if(event.keyCode==40){
		audio.volume -= 0.1;
	}
})
document.addEventListener('keyup',function(){
	if(event.keyCode==32){
		playAudio();
	}
})
		
//Play the song
function playAudio(){
	if(audio.paused){
		audio.play();
	}else{
		audio.pause();
	}
}
		
//Button Functions
function downMusic(){audio.volume -= 0.1;}
function upMusic(){audio.volume += 0.1;}
function backMusic(){}
function nextMusic(){}