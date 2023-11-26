// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element){
    return element
    .map(({preview, original, description}) => {
        return `
            <a class="gallery__item" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>`
    })
    .join('');
};

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
});


/*

Tarea 1 - biblioteca SimpleLightbox

Realice esta tarea en los archivos 01-gallery.html y 01-gallery.js. 
Divídalo en varias subtareas:

Añada una biblioteca SimpleLightbox como dependencia del proyecto 
usando npm (el enlace CDN de su último trabajo ya no es necesario).
Use el código JavaScript de su tarea anterior, pero refactorice 
teniendo en cuenta que la biblioteca fue instalada 
a través de npm. (sintaxis de import/export).
Para incluir el código CSS de la biblioteca en el proyecto, 
es necesario añadir otro import más, 
además de la descrita en la documentación.

// Descrito en la documentación
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

EXPLICACIÓN

Este código importa el arreglo `galleryItems` desde el archivo `gallery-items.js`. 
Luego, utiliza la biblioteca SimpleLightbox para crear una galería 
de imágenes en el contenedor con la clase "gallery". Finalmente, 
inicializa el lightbox con las opciones deseadas.

1. Se importa el arreglo `galleryItems` desde el archivo `gallery-items.js`:

   import { galleryItems } from './gallery-items';
   

2.  se importar la biblioteca SimpleLightbox y su archivo CSS correspondiente:
  
   import SimpleLightbox from "simplelightbox";
   import "simplelightbox/dist/simple-lightbox.min.css";
   

3. Se selecciona el contenedor de la galería en el DOM:
 
   const galleryContainer = document.querySelector(".gallery");
   

4. Se crea una función `createGalleryItem` que recibe un arreglo de elementos 
y devuelve el HTML para cada elemento de la galería:

   function createGalleryItem(element) {
       return element
           .map(({ preview, original, description }) => {
               return `
                   <a class="gallery__item" href="${original}">
                       <img 
                           class="gallery__image"
                           src="${preview}"
                           alt="${description}"
                       />
                   </a>`
           })
           .join('');
   }
   

5. Se llamar a la función `createGalleryItem` con el arreglo `galleryItems` 
para obtener el HTML de los elementos de la galería:
   
   const photosMarkup = createGalleryItem(galleryItems);
   

6. Se inserta el HTML de los elementos de la galería en el contenedor seleccionado:

   galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);
   

7. Se inicializa el lightbox utilizando la clase CSS del contenedor y 
las opciones deseadas:

   const lightbox = new SimpleLightbox('.gallery a', {
       caption: true,
       captionsData: 'alt',
       captionDelay: 250,
   });

Para ejecuatar correctamente este código se deben tener los archivos `gallery-items.js`, 
la biblioteca SimpleLightbox y su archivo CSS correctamente configurados y disponibles en 
el proyecto antes de ejecutar el código.

*/