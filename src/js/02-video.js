


const iframe = document.querySelector('iframe');


const vimeoPlayer = new Vimeo.Player(iframe);


const LOCAL_STORAGE_KEY = 'vimeo-player-current-time';


vimeoPlayer.on('timeupdate', function(data) {

  const currentTime = data.seconds;

 
  localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
});


const savedTime = parseFloat(localStorage.getItem(LOCAL_STORAGE_KEY) || '0');


vimeoPlayer.setCurrentTime(savedTime).then(function(seconds) {
  console.log('Відновлення відтворення з часу:', seconds);
});


vimeoPlayer.play();
