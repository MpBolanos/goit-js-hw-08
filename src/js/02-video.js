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


/*

Tarea 2 - reproductor de vídeo

El HTML tiene un <iframe> con un vídeo para el reproductor de Vimeo. Escriba un script que guarda el tiempo de reproducción del vídeo actual en el almacenamiento local y en la recarga de la página, continúa reproduciendo el vídeo desde ese momento.

<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>

Ejecute esta tarea en los archivos 02-video.html' y 02-video.js'. 
Divídalo en varias subtareas:

Ver más información sobre la documentación de la biblioteca 
del reproductor Vimeo.
Añada la biblioteca como dependencia del proyecto a través de npm.
Inicialice el reproductor en el archivo de script como se describe 
en la sección pre-existing player, pero tenga en cuenta que 
ha añadido el reproductor como un paquete npm, y no vía CDN.
Ordene la documentación del método on() y empiece a seguir 
el evento timeupdate, actualización del tiempo de reproducción.
Guarde el tiempo de reproducción en el almacenamiento local. 
Deje que la clave sea la secuencia "videoplayer-current-time".
Al recargar la página, use el método setCurrentTime() para 
reanudar la reproducción desde la posición guardada.
Añada una biblioteca al proyecto lodash.throttle y 
asegúrese que el tiempo de reproducción se actualice 
en la memoria no más de una vez por por segundo.

EXPLICACIÓN

Este código importa la biblioteca `Player` de Vimeo y la función `throttle` de Lodash. 
Luego, selecciona un elemento `<iframe>` en el DOM y crea una instancia 
del reproductor de Vimeo utilizando ese elemento. A continuación, 
se define una clave para almacenar el tiempo de reproducción actual 
en el almacenamiento local del navegador. Después, se establece el tiempo 
de reproducción actual del reproductor utilizando el valor almacenado 
en el almacenamiento local. Si ocurre algún error, se muestra un mensaje 
en la consola y se pueden tomar acciones adicionales para manejarlo. Por último, 
se agrega un evento 'timeupdate' al reproductor que llama a la función `onPlay` 
con un retardo de 1000 milisegundos utilizando la función `throttle`.

1. Se importa la clase `Player` de Vimeo y la función `throttle` de Lodash:
   
   import Player from '@vimeo/player';
   import throttle from 'lodash/throttle';
   

2. Se selecciona un elemento `<iframe>` en el DOM:
  
   const iframe = document.querySelector('iframe');
   

3. Se crear una instancia del reproductor de Vimeo utilizando 
el elemento `<iframe>` seleccionado:
   
   const player = new Player(iframe);
   

4. Se defini una clave para almacenar el tiempo de reproducción 
actual en el almacenamiento local del navegador:
   
   const localStorageKey = 'videoplayer-current-time';
   

5. Se definir una función `onPlay` que se ejecutará 
cuando se reproduzca el video y que almacenará el tiempo 
de reproducción actual en el almacenamiento local:
   
   const onPlay = function (data) {
       localStorage.setItem(localStorageKey, data.seconds);
   };
   

6. Se intentar establecer el tiempo de reproducción actual 
del reproductor utilizando el valor almacenado en el almacenamiento local:
   
   try {
       player.setCurrentTime(localStorage.getItem(localStorageKey)).then(function (time) {
           time = localStorage.getItem(localStorageKey);
       });
   } catch (error) {
       console.log("Ocurrió un error al establecer el tiempo de reproducción: " + error.message);
       // Tomar acciones adicionales para manejar el error
   }
   

7. Se agregar un evento 'timeupdate' al reproductor que llame a la función `onPlay` 
con un retardo de 1000 milisegundos utilizando la función `throttle`:
  
   player.on('timeupdate', throttle(onPlay, 1000));

Para ejecuatar correctamente este código se deben las bibliotecas `@vimeo/player` 
y `lodash` correctamente instaladas y disponibles en el proyecto antes de ejecutar el código.
*/
