class Activity {
  constructor(id, title, descripcion, imgurl) {
    this.id = id;
    this.title = title;
    this.descripcion = descripcion;
    this.imgurl = imgurl;
  }
}

class Repository {
  // Un arreglo para almacenar las actividades
  constructor() {
    this.activities = [];
    this.nextId = 1; // Inicializar el ID en 1
  }

  // Debe instanciar una actividad con los datos correspondientes y almacenarla en su arreglo
  createActivity(title, descripcion, imgurl) {
    const activity = new Activity(this.nextId++, title, descripcion, imgurl);
    this.activities.push(activity);
  }

  // Debe retornar un arreglo con todas las actividades
  getAllActivities() {
    return this.activities;
  }

  // Eliminar
  deleteActivity(idBuscado) {
    console.log(idBuscado);
    this.activities = this.activities.filter((elemento) => elemento.id !== idBuscado);
  } 

}

const repository = new Repository();

var titulo = document.getElementById('iTitulo');

var descripcion = document.getElementById('txtArea');

var imgUrl = document.getElementById('iUri');

var boton = document.getElementById("iboton");

// repository.createActivity("noticias", "primero", "http://www.ere.com/img01");
// console.log(repository);
// console.log(repository.getAllActivities()); 


// Función para convertir una instancia de Activity en un elemento HTML
function activityToHTML(activity) {
  const {id, title, descripcion, imgUrl} = activity;
  const card = document.createElement("div");
  card.className = "card";
  card.id = id;

  const h3 = document.createElement("h3");
  h3.innerText = title;

  const p = document.createElement("p");
  p.innerText = descripcion;

  const img = document.createElement("img");
  img.src = imgUrl;

  const deleteBoton = 


}

// Ejemplo de uso
const myActivity = new Activity('Ejercicio', 'Correr en el parque');
const activityHTML = activityToHTML(myActivity);

// Agregar el elemento HTML al cuerpo del documento
document.body.appendChild(activityHTML);





/* // seleccionar el input de titulo 
var titulo = document.getElementById('iTitulo');
// seleccionar el input de descripcion 
var descripcion = document.getElementById('txtArea');
// seleccionar el input de url de imagen  
var imgUrl = document.getElementById('iUri');
// seleccionar el boton
var boton = document.getElementById("iboton");

// seleccionar el contenedor de tarjetas
// handler
// tomar los valores de los inputs
// validar que los inputs tengan informacion si no return alert que falta ingresar algo
// repository.createActivity(title, descripcion, imgurl)

// convertir todos los objetos activity a tarjetas de html
// appender todas las tarjetas al contenedor de tarjetas  */
