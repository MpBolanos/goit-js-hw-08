import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';
const onPlay = function (data){
    localStorage.setItem(localStorageKey, data.seconds);
};

try {
    player.setCurrentTime(localStorage.getItem(localStorageKey)).then(function(time){
      time = localStorage.getItem(localStorageKey);
    });
  } catch (error) {
    console.log("Ocurrió un error al establecer el tiempo de reproducción: " + error.message);
    // Tomar acciones adicionales para manejar el error
  }
player.on('timeupdate', (throttle(onPlay, 1000)));
