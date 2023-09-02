import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');


const Player = new Player(iframe);


const LOCAL_STORAGE_KEY = 'vimeo-player-current-time';


player.on('timeupdate', function(data) {

  const currentTime = data.seconds;

 
  localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
});


const savedTime = parseFloat(localStorage.getItem(LOCAL_STORAGE_KEY) || '0');


vimeoPlayer.setCurrentTime(savedTime).then(function(seconds) {
  console.log(seconds);
});

vimeoPlayer.play();
