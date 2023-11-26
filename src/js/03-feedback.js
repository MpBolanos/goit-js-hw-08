import throttle  from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feeadback-from-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));
populateInput();

function onFormSubmit(event){
    event.preventDefault();
    const formData = new FormData(form);
    const submitForm = {};
    formData.forEach((value, name) => (submitForm[name] = value));
    console.log(submitForm);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event){
    let persistedForm = localStorage.getItem(STORAGE_KEY);
    if(persistedForm){
        persistedForm = JSON.parse(persistedForm);
    } else {
        persistedForm = {};
    }
    persistedForm[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedForm));
}

function populateInput(){
    let persistedForm = localStorage.getItem(STORAGE_KEY);
    if(persistedForm){
        persistedForm = JSON.parse(persistedForm);
        Object.entries(persistedForm).forEach(([name, value]) => {
            form.elements[name].value = value;
        });
    } 
}

/*

Tarea 3 - formulario Feedback

HTML tiene un diseño de formulario. Escriba un script que guarde los valores de los espacios en el almacenamiento local cuando el usuario escriba algo.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Ejecute esta tarea en los archivos 03-feedback.html y 03-feedback.js. 
Desglose en varias subtareas:

Monitorizar el evento input en el formulario, y cada vez escribir en 
el almacenamiento local en un objeto con los espacios email y message, 
en los que se almacenan los valores de los espacios del formulario. 
Dejemos que la clave del repositorio sea la secuencia "feedback-form-state".
Cuando la página se cargue, compruebe el estado del almacenamiento 
y si hay datos guardados, rellene los espacios del formulario con ellos. 
En caso contrario, los espacios deben estar vacíos.
Al enviar el formulario, borre el almacenamiento y los campos 
del formulario, y emita un objeto con los espacios email y message 
y sus valores actuales a la consola.
Asegúrese de que el repositorio no se actualice con más frecuencia 
que una vez cada 500 milisegundos. Para eso, añada al proyecto y 
use la biblioteca lodash.throttle.

EXPLICACIÓN

Este código es una implementación en JavaScript de un formulario que guarda 
y carga los datos introducidos por el usuario utilizando el almacenamiento 
local del navegador.

Cuando se envía el formulario, se obtienen los datos del formulario 
utilizando `FormData` y se crea un objeto con esos datos. 
Luego, se muestra el objeto en la consola, se reinicia el formulario 
y se eliminan los datos almacenados en el almacenamiento local.

Cuando se introduce texto en un campo de texto del formulario, 
se guarda el valor en el almacenamiento local utilizando `localStorage`. 
El valor se guarda bajo la clave `STORAGE_KEY`.

Al cargar la página, los datos almacenados en el almacenamiento local 
se recuperan y se utilizan para rellenar los campos del formulario.

La biblioteca Lodash se utiliza para aplicar un retardo de 500 milisegundos 
al evento 'input' utilizando la función `throttle`.

1. Se importa la función `throttle` de la biblioteca Lodash, permitiendo
 utilizar la función `throttle` en el código: 

    import throttle from 'lodash.throttle';

2. Se selecciona un elemento `<form>` en el DOM, asignando 
el elemento `<form>` a la variable `form`:

    const form = document.querySelector('form');`

3. Se define una constante `STORAGE_KEY` para almacenar la clave utilizada 
para guardar los datos del formulario en el almacenamiento local del navegador. 
    
const STORAGE_KEY = 'feeadback-from-state';

4. Se agrega un evento 'submit' al formulario que llama a la función `onFormSubmit` 
cuando se envía el formulario. 

    form.addEventListener('submit', onFormSubmit);

5. Se agrega un evento 'input' al formulario que llama a la función `onTextareaInput` 
con un retardo de 500 milisegundos utilizando la función `throttle`. 

    form.addEventListener('input', throttle(onTextareaInput, 500));

6. Se llama a la función `populateInput` para rellenar los campos del formulario 
con los datos almacenados en el almacenamiento local. 

    populateInput();

7. Se define la función `onFormSubmit` que se ejecuta cuando se envía el formulario. 
Esta función obtiene los datos del formulario utilizando `FormData`, 
crea un objeto con esos datos, muestra el objeto en la consola, 
reinicia el formulario y elimina los datos almacenados en el almacenamiento local.

8. Se deefine la función `onTextareaInput` que se ejecuta cuando se introduce 
texto en un campo de texto del formulario. Esta función obtiene los datos del 
formulario almacenados en el almacenamiento local, actualiza los datos con el 
nuevo valor introducido y guarda los datos actualizados en el almacenamiento local.

9. Se define la función `populateInput` que rellena los campos del formulario 
con los datos almacenados en el almacenamiento local, si existen. 
Esta función obtiene los datos del almacenamiento local, los parsea 
a un objeto JavaScript y utiliza esos valores para rellenar los campos del formulario.

Para ejecutar este código correctamente, se necesita tener instalada la biblioteca Lodash
en el proyecto antes de ejecutar el código.

*/