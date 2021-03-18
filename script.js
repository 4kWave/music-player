//Variabels
let current_song_index;
let next_song_index;
const play_btn = document.getElementById('play-button');
const audio_player = document.getElementById('music-player');
const songArtist = document.getElementById('music-artist');
const songName = document.getElementById('music-name');
const songImage = document.getElementById('current-image');

//Song List
let songs = [
	{
		artist: 'Elfen Lied',
		title: 'Lilium',
		songPath: 'audio/elfenLied.mp3',
		imgPath: 'images/albumPhotoLeft.jpg'
	},
	{
		artist:'Angel Beats',
		title: 'My Soul, Your Beats!',
		songPath: 'audio/ab.mp3',
		imgPath: 'images/albumPhoto.jpg'
	},
	{
		artist:'Wagakki Band',
		title: 'Homura',
		songPath: 'audio/homura.mp3',
		imgPath: 'images/albumPhotoRight.jpg'
	}
]

//Functions
//Play and Change Music Song/Informations
initPlayer();

function initPlayer(){
	current_song_index = 1;
	playMusic();
}
function playMusic(){
	let song = songs[current_song_index];
	audio_player.src = song.songPath;
	songArtist.innerHTML = songs[current_song_index].artist;
	songName.innerHTML = songs[current_song_index].title;
	songImage.src = songs[current_song_index].imgPath;
}
function toggleMusic(){
	if(audio_player.paused){
		audio_player.play();
		audio_player.volume = 0.2;
	}else{
		audio_player.pause();
	}
}
function changeMusicNext(i = true){
	if(i=true){
		current_song_index++;
		playMusic();
		toggleMusic();
	}
}
function changeMusicBack(i=true){
	if(i=true){
		current_song_index--;
		playMusic();
		toggleMusic();
	}
}
//Volume
function upVolume(){
	audio_player.volume += 0.1;
}
function downVolume(){
	audio_player.volume -= 0.1;
}

//Music timer
function changeCurrentTime(){
	currentAudioTime = audio_player.duration * (ranger.value / 100);
	audio_player.currentTime = currentAudioTime;
}

//Keyboard Functions
document.addEventListener('keyup',function(){
	if(event.keyCode==38){
		audio_player.volume += 0.1;
	}
})		
document.addEventListener('keyup',function(){
	if(event.keyCode==40){
		audio_player.volume -= 0.1;
	}
})
document.addEventListener('keyup',function(){
	if(event.keyCode==32){
		toggleMusic()
	}
})
document.addEventListener('keyup',function(){
	if(event.keyCode==37)
		changeMusicBack()
})
document.addEventListener('keyup',function(){
	if(event.keyCode==39)
		changeMusicNext()
})
